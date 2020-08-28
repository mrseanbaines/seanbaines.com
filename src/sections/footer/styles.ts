import styled, { css } from 'styled-components'

import { Text } from 'styles/text'

export const Wrapper = styled(Text)(({ theme }) => {
  return css`
    display: grid;
    justify-content: center;
    grid-auto-flow: column;
    gap: ${theme.space[0]};
  `
})
