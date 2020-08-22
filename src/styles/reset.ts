import { createGlobalStyle, css } from 'styled-components'

const Reset = createGlobalStyle(() => {
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

export default Reset
