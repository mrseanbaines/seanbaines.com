import React from 'react'
import { graphql, PageProps } from 'gatsby'

import { Hero } from 'sections/hero'
import { RotatingIcons } from 'sections/rotating-icons'
import { IconCardsWithImage } from 'sections/icon-cards-with-image'
import { IconCardsRow } from 'sections/icon-cards-row'
import { RotatingCards } from 'sections/rotating-cards'
import { Footer } from 'sections/footer'
import { Section } from 'styles/layout'

type RepoLanguage = {
  name: string
}

type Repo = {
  name: string
  description: string
  languages: {
    nodes: RepoLanguage[]
  }
  url: string
}

type IconCard = {
  id: string
  title: string
  body: string
  // TODO: Make this typesafe
  icon: any
}

export type Data = {
  site: {
    siteMetadata: {
      social: {
        github: string
        twitter: string
        linkedin: string
        medium: string
      }
    }
  }
  main: {
    hero: {
      pretitle: string
      title: string
      body: string
    }
    rotatingIcons: {
      title: string
    }
    iconCardsWithImage: {
      title: string
      cards: IconCard[]
    }
    iconCardsRow: {
      title: string
      cards: IconCard[]
    }
    rotatingCards: {
      title: string
      ctaText: string
      ctaUrl: string
    }
    footer: {
      text1: string
      text2: string
    }
  }
  githubData: {
    data: {
      user: {
        pinnedItems: {
          nodes: Repo[]
        }
      }
    }
  }
}

export type Props = PageProps<Data>

const IndexPage = ({ data }: Props) => {
  const repos = data.githubData.data.user.pinnedItems.nodes.map(repo => ({
    title: repo.name,
    body: repo.description,
    extras: repo.languages.nodes.map(node => node.name),
    url: repo.url,
  }))

  return (
    <>
      <Section noGutter fullWidth as='main'>
        <Hero
          data={{
            ...data.main.hero,
            social: data.site.siteMetadata.social,
          }}
        />

        <RotatingIcons data={data.main.rotatingIcons} />

        <IconCardsWithImage data={data.main.iconCardsWithImage} />

        <IconCardsRow data={data.main.iconCardsRow} />

        <RotatingCards
          items={repos}
          data={{
            ...data.main.rotatingCards,
            ctaUrl: `https://github.com/${data.site.siteMetadata.social.github}`,
          }}
        />
      </Section>

      <Footer data={data.main.footer} />
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        social {
          github
          twitter
          linkedin
          medium
        }
      }
    }
    main {
      hero {
        pretitle
        title
        body
      }
      rotatingIcons {
        title
      }
      iconCardsWithImage {
        title
        cards {
          id
          title
          body
          icon
        }
      }
      iconCardsRow {
        title
        cards {
          id
          title
          body
          icon
        }
      }
      rotatingCards {
        title
        ctaText
      }
      footer {
        text1
        text2
      }
    }
    githubData {
      data {
        user {
          pinnedItems {
            nodes {
              name
              description
              url
              languages {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
