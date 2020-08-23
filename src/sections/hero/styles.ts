import styled, { css } from 'styled-components'

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
