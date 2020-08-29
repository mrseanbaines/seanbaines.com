import styled, { css } from 'styled-components'

export const Wrapper = styled.div(({ theme }) => {
  return css`
    padding: ${theme.space[1]};
    border-radius: ${theme.radii.rounded[0]};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.16);
    background: ${theme.colors.background.default};
    width: 420px;
  `
})
