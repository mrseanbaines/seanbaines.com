import styled, { css } from 'styled-components'

export const Img = styled.img(({ theme }) => {
  return css`
    max-width: none;
    width: 175%;

    ${theme.mediaQueries.xs} {
      width: 125%;
    }

    ${theme.mediaQueries.sm} {
      width: 100%;
    }

    ${theme.mediaQueries.md} {
      width: 175%;
    }

    ${theme.mediaQueries.lg} {
      width: 200%;
    }
  `
})

export const IconCardsWrapper = styled.div(({ theme }) => {
  return css`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: ${theme.space[1]};
    row-gap: ${theme.space[2]};

    ${theme.mediaQueries.xs} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${theme.mediaQueries.md} {
      column-gap: ${theme.space[2]};
      row-gap: ${theme.space[3]};
    }
  `
})
