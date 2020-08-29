import styled, { css } from 'styled-components'

import { Text } from 'styles/text'

export const Wrapper = styled(Text).attrs({ as: 'div' })(({ theme }) => {
  return css`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-auto-flow: column;
    gap: ${theme.space[0]};
    opacity: 0.6;
  `
})
