import styled, { css } from 'styled-components'

export const IconCardsWrapper = styled.div(({ theme }) => {
  return css`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: ${theme.space[1]};
    row-gap: ${theme.space[2]};
    text-align: center;

    ${theme.mediaQueries.xs} {
      grid-template-columns: repeat(3, 1fr);
    }

    ${theme.mediaQueries.md} {
      column-gap: ${theme.space[2]};
      row-gap: ${theme.space[3]};
    }
  `
})
