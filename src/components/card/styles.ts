import styled, { css } from 'styled-components'

export const Wrapper = styled.div(({ theme }) => {
  return css`
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: ${theme.space[1]};
    border-radius: ${theme.radii.rounded[0]};
    border: ${theme.borders.default};
    background: ${theme.colors.background.default};
    width: 420px;

    &:hover,
    &:focus,
    &:active {
      border-color: ${theme.colors.primary};
    }
  `
})
