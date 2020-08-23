import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from 'theme'
import { Reset } from 'styles/reset'
import { Global } from 'styles/global'

export const WrapPageElement: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Reset />
    <Global />

    {children}
  </ThemeProvider>
)
