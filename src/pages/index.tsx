import React from 'react'
import { graphql, PageProps } from 'gatsby'

import { Hero } from 'sections/hero'
import { TechStack } from 'sections/tech-stack'
import { IconCardsWithImage } from 'sections/icon-cards-with-image'
import { IconCardsRow } from 'sections/icon-cards-row'
import { Footer } from 'sections/footer'
import { PaddingY } from 'styles/layout'

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
}

export type Props = PageProps<Data>

const IndexPage: React.FC<Props> = ({ data }) => (
  <>
    <PaddingY as='main'>
      <Hero social={data.site.siteMetadata.social} />
      <TechStack />
      <IconCardsWithImage />
      <IconCardsRow />
    </PaddingY>

    <Footer />
  </>
)

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
  }
`

export default IndexPage
