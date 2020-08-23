import React from 'react'
import { graphql, PageProps } from 'gatsby'

import { Hero } from 'sections/hero'

type Data = {
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

type Props = PageProps<Data>

const IndexPage: React.FC<Props> = ({ data }) => (
  <main>
    <Hero social={data.site.siteMetadata.social} />
  </main>
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
