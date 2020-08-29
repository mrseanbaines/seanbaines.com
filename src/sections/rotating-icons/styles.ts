import styled, { css } from 'styled-components'

export const Wrapper = styled.div(({ theme }) => {
  return css`
    display: grid;
    row-gap: ${theme.space[2]};
  `
})

export const IconsWrapper = styled.div(({ theme }) => {
  return css`
    display: grid;
    justify-content: center;
    position: relative;

    ::after {
      pointer-events: none;
      content: '';
      background: linear-gradient(
        to right,
        ${theme.colors.background.default} 0,
        rgba(255, 255, 255, 0) 20%,
        rgba(255, 255, 255, 0) 80%,
        ${theme.colors.background.default} 100%
      );
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
  `
})

export const Icons = styled.div(({ theme }) => {
  return css`
    display: grid;
    gap: ${theme.space[3]};
    justify-content: start;
    grid-auto-flow: column;
    opacity: 0.4;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: thin;
    padding-left: ${theme.space[1]};
    padding-right: ${theme.space[1]};

    /* Fixes icons showing slightly above gradient */
    padding-top: 1px;
    padding-bottom: 1px;

    ${theme.mediaQueries.sm} {
      gap: ${theme.space[4]};
      padding-left: ${theme.space[2]};
      padding-right: ${theme.space[2]};
    }
  `
})
