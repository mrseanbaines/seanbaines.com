import { createGlobalStyle, css } from 'styled-components'

export const Reset = createGlobalStyle(() => {
  return css`
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
      scrollbar-width: thin;
    }

    html {
      box-sizing: border-box;
    }

    img,
    picture {
      display: block;
      max-width: 100%;
      user-select: none;
    }

    a {
      text-decoration: none;
    }

    a,
    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
      cursor: pointer;
      outline: none;
    }
  `
})
