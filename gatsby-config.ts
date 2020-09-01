import { GatsbyConfig } from 'gatsby'
import { config } from 'dotenv'

config()

export const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    siteName: 'mrseanbaines',
    social: {
      github: 'mrseanbaines',
      twitter: 'mrseanbaines',
      linkedin: 'seanbaines',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-github-api',
      options: {
        token: process.env.GH_ACCESS_TOKEN,
        graphQLQuery: `
          query {
            user(login: "mrseanbaines") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    name
                    description
                    url
                    languages(first: 3, orderBy: { field: SIZE, direction: DESC }) {
                      nodes {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      },
    },
  ],
}
