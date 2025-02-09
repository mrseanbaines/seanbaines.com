import React from 'react'
import { graphql, useStaticQuery, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'

import openGraphImage from 'images/og-image.png'
import favicon_32x32 from 'images/favicon-32x32.png'
import favicon_16x16 from 'images/favicon-16x16.png'

export type Data = {
  site: {
    siteMetadata: {
      siteName: string
      author: string
      social: {
        twitter: string
      }
    }
  }
  meta: {
    title: string
    description: string
    keywords: string[]
  }
}

type Props = Omit<PageProps, 'children'>

export const SEO = ({ location }: Props) => {
  const data = useStaticQuery<Data>(query)
  const { social, siteName, author } = data.site.siteMetadata
  const url = new URL(location.pathname, process.env.GATSBY_SITE_URL || location.origin)

  const seo = {
    langCode: 'en',
    countryCode: 'gb',
    title: data.meta.title,
    description: data.meta.description,
    canonicalUrl: url.href,
    keywords: data.meta.keywords.join(', '),
    openGraphImage: new URL(openGraphImage, url).href,
    siteName,
    author,
  }

  return (
    <Helmet>
      <html lang={seo.langCode} />

      <title>{seo.title}</title>

      <meta name='description' content={seo.description} />
      <meta name='keywords' content={seo.keywords} />
      <meta name='author' content={seo.author} />

      <link rel='canonical' href={seo.canonicalUrl} />
      <link rel='icon' type='image/png' href={favicon_32x32} sizes='32x32' />
      <link rel='icon' type='image/png' href={favicon_16x16} sizes='16x16' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={`@${social.twitter}`} />
      <meta name='twitter:site' content={`@${social.twitter}`} />

      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.openGraphImage} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:locale' content={`${seo.langCode}_${seo.countryCode}`} />
      <meta property='og:site_name' content={seo.siteName} />
      <meta property='og:title' content={seo.title} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={seo.canonicalUrl} />
    </Helmet>
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        author
        social {
          twitter
        }
      }
    }
    meta {
      title
      description
      keywords
    }
  }
`
