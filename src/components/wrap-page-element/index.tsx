import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from 'theme'
import { Reset } from 'styles/reset'

export const WrapPageElement: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Reset />

    {children}
  </ThemeProvider>
)
