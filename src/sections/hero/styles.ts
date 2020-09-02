import styled, { css } from 'styled-components'

import circle from 'images/circle.svg'

export const Icons = styled.div(({ theme }) => {
  return css`
    display: grid;
    justify-content: start;
    gap: ${theme.space[1]};
    grid-auto-flow: column;

    a {
      line-height: 0;

      :hover,
      :focus,
      :active {
        svg {
          fill: ${theme.colors.icons.muted};
        }
      }
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
