import styled, { css } from 'styled-components'

import circle from 'images/circle.svg'

export const Wrapper = styled.div(({ theme }) => {
  return css`
    display: grid;
    justify-items: start;
    align-items: center;
    grid-template-columns: 1fr;
    column-gap: ${theme.space[1]};
    row-gap: ${theme.space[2]};

    ${theme.mediaQueries.sm} {
      grid-template-columns: 1fr 1fr;
    }

    ${theme.mediaQueries.md} {
      grid-template-columns: 7fr 5fr;
    }
  `
})

export const Icons = styled.div(({ theme }) => {
  return css`
    display: grid;
    justify-content: start;
    gap: ${theme.space[1]};
    grid-auto-flow: column;

    a {
      line-height: 0;
    }
  `
})

export const TitleWrapper = styled.div(({ theme }) => {
  return css`
    position: relative;

    ::before {
      content: '';
      background-image: url(${circle});
      background-size: contain;
      background-repeat: no-repeat;
      width: 400px;
      height: 400px;
      position: absolute;
      top: -40px;
      left: 0;
      z-index: -1;
      opacity: 0.04;

      ${theme.mediaQueries.sm} {
        top: -60px;
        left: -80px;
        width: 600px;
        height: 600px;
      }
    }
  `
})
