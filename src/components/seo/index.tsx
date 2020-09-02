import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

// const openGraphImage = 'images/'

export type Data = {
  site: {
    siteMetadata: {
      siteName: string
      social: {
        twitter: string
      }
    }
  }
  meta: {
    description: string
    keywords: string[]
  }
}

export const SEO: React.FC = () => {
  const data = useStaticQuery<Data>(query)
  const { social, siteName } = data.site.siteMetadata
  // const siteUrl = process.env.GATSBY_SITE_URL || location.origin

  const seo = {
    langCode: 'en',
    countryCode: 'gb',
    title: siteName,
    description: data.meta.description,
    // canonicalUrl: `${siteUrl}${location.pathname}`,
    keywords: data.meta.keywords.join(', '),
    // openGraphImage,
  }

  return (
    <Helmet>
      <html lang={seo.langCode} />

      <title>{seo.title}</title>

      <meta name='description' content={seo.description} />
      <meta name='keywords' content={seo.keywords} />

      {/* <link rel='canonical' href={seo.canonicalUrl} /> */}

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={`@${social.twitter}`} />
      <meta name='twitter:site' content={`@${social.twitter}`} />

      <meta property='og:description' content={seo.description} />
      {/* <meta property='og:image' content={seo.openGraphImage} /> */}
      <meta property='og:locale' content={`${seo.langCode}_${seo.countryCode}`} />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:title' content={seo.title} />
      <meta property='og:type' content='website' />
      {/* <meta property='og:url' content={seo.canonicalUrl} /> */}
    </Helmet>
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        social {
          twitter
        }
      }
    }
    meta {
      description
      keywords
    }
  }
`
