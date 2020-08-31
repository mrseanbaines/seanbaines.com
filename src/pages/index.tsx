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

export type Data = {
  site: {
    siteMetadata: {
      social: {
        github: string
        twitter: string
        linkedin: string
      }
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

const IndexPage: React.FC<Props> = ({ data }) => {
  const repos = data.githubData.data.user.pinnedItems.nodes.map(repo => ({
    title: repo.name,
    body: repo.description,
    extras: repo.languages.nodes.map(node => node.name),
    url: repo.url,
  }))

  return (
    <>
      <Section noGutter fullWidth as='main'>
        <Hero social={data.site.siteMetadata.social} />
        <RotatingIcons />
        <IconCardsWithImage />
        <IconCardsRow />
        <RotatingCards items={repos} />
      </Section>

      <Footer />
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
        }
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
