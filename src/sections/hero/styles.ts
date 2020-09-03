import styled, { css, keyframes } from 'styled-components'

import { IconWrapper } from 'components/icon/styles'
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
          color: ${theme.colors.icons.muted};
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

export const CTAGroup = styled.div(({ theme }) => {
  return css`
    display: grid;
    gap: ${theme.space[1]};
    grid-auto-flow: column;
    justify-content: start;

    ${IconWrapper} {
      transition: all 100ms;
    }

    *:hover ${IconWrapper}, *:focus ${IconWrapper}, *:active ${IconWrapper} {
      transform: scale(1.1);
    }
  `
})

export const CTA = styled.div(({ theme }) => {
  return css`
    display: grid;
    justify-items: center;
    gap: ${theme.space[0]};
  `
})

type HeartCTAProps = {
  liked?: boolean
}

export const HeartCTA = styled(CTA)<HeartCTAProps>(({ theme, liked }) => {
  const heart = keyframes`
    40% {
      transform: scale(0);
    }
    80% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  `

  const pop = keyframes`
    100% {
      transform: scale(2);
      opacity: 0;
    }
  `

  const likedStyles = css`
    > ${IconWrapper} {
      color: ${theme.colors.icons.danger};
      position: relative;

      svg {
        animation: ${heart} 300ms;

        * {
          fill: currentColor;
        }
      }

      ::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: currentColor;
        width: 100%;
        height: 100%;
        z-index: -1;
        border-radius: 9999em;
        transform: scale(0);
        animation: ${pop} 300ms;
      }
    }
  `

  return css`
    ${liked && likedStyles}
  `
})
