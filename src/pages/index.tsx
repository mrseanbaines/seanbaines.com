import React from 'react'
import { PageProps, graphql } from 'gatsby'

import { Section } from 'styles/layout'

type Data = {
  site: {
    siteMetadata: {
      siteName: string
    }
  }
}

type Props = PageProps<Data>

const IndexPage: React.FC<Props> = ({ data }) => (
  <Section>
    <h1>Welcome to {data.site.siteMetadata.siteName}</h1>
  </Section>
)

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

export default IndexPage
