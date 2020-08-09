import React from 'react'
import { PageProps, graphql } from 'gatsby'

type Data = {
  site: {
    siteMetadata: {
      siteName: string
    }
  }
}

type Props = PageProps<Data>

const IndexPage: React.FC<Props> = ({ data }) => <h1>Welcome to {data.site.siteMetadata.siteName}</h1>

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
