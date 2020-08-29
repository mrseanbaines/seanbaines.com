import styled, { css } from 'styled-components'

export const Wrapper = styled.div(({ theme }) => {
  return css`
    display: grid;
    grid-auto-flow: column;
    gap: ${theme.space[2]};
  `
})
