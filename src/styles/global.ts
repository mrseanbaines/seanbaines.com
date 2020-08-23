import { createGlobalStyle, css } from 'styled-components'

import jost from 'fonts/jost.woff2'
import { fonts } from 'theme'

export const Global = createGlobalStyle(({ theme }) => {
  return css`
    @font-face {
      font-family: ${fonts.primary};
      src: url(${jost}) format('woff2');
      font-weight: 1 999;
      font-style: normal;
      font-display: swap;
    }

    :root {
      font-size: 90%;

      ${theme.mediaQueries.sm} {
        font-size: 100%;
      }
    }

    main {
      overflow: hidden;
    }

    ::selection {
      background: ${theme.colors.selection.background};
      color: ${theme.colors.selection.foreground};
    }
  `
})
