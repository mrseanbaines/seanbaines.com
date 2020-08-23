import { createGlobalStyle, css } from 'styled-components'

import jost from 'fonts/jost.woff2'
import { fonts } from 'theme'

export const Reset = createGlobalStyle(({ theme }) => {
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

    *,
    *:before,
    *:after {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      background: none;
      border: none;
      box-sizing: inherit;
      font: inherit;
      line-height: inherit;
      margin: 0;
      min-width: 0;
      padding: 0;
      scroll-behavior: smooth;
      text-rendering: optimizeSpeed;
    }

    html {
      box-sizing: border-box;
    }

    img,
    picture {
      display: block;
      max-width: 100%;
    }

    a,
    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
      cursor: pointer;
    }
  `
})
