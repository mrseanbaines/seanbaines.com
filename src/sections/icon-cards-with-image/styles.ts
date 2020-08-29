import styled, { css } from 'styled-components'

export const TitleWrapper = styled.div(({ theme }) => {
  return css`
    display: grid;
    grid-template-columns: 1fr;

    ${theme.mediaQueries.sm} {
      grid-template-columns: 1fr 1fr;
    }

    ${theme.mediaQueries.md} {
      grid-template-columns: 8fr 4fr;
    }
  `
})

export const Img = styled.img(() => {
  return css`
    max-width: none;
    width: 200%;
  `
})
