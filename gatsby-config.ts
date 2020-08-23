import { GatsbyConfig } from 'gatsby'

export const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    siteName: 'mrseanbaines',
    social: {
      github: 'mrseanbaines',
      twitter: 'mrseanbaines',
      linkedin: 'seanbaines',
    },
  },
  plugins: ['gatsby-plugin-styled-components'],
}
