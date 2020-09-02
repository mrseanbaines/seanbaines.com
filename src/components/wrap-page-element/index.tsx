import React from 'react'
import { ThemeProvider } from 'styled-components'

import { SEO } from 'components/seo'
import { theme } from 'theme'
import { Reset } from 'styles/reset'
import { Global } from 'styles/global'

export const WrapPageElement: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Reset />
    <Global />
    <SEO />

    {children}
  </ThemeProvider>
)
