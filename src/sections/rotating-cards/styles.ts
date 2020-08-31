import styled, { css } from 'styled-components'

import { paddingX } from 'styles/layout'

export const SeeMoreWrapper = styled.div(() => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
})

export const CardsWrapper = styled.div(({ theme }) => {
  return css`
    display: grid;
    grid-auto-flow: column;
    gap: ${theme.space[2]};
    margin-bottom: ${theme.space[2]};
    overflow-x: auto;
    ${paddingX}
  `
})
