import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PageProps } from 'gatsby'

import { SEO } from 'components/seo'
import { theme } from 'theme'
import { Reset } from 'styles/reset'
import { Global } from 'styles/global'

type Props = Omit<PageProps, 'children'> & {
  children: React.ReactNode
}

export const WrapPageElement = ({ children, ...props }: Props) => (
  <ThemeProvider theme={theme}>
    <Reset />
    <Global />
    <SEO {...props} />

    {children}
  </ThemeProvider>
)
