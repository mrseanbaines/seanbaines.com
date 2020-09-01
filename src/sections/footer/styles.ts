import styled, { css } from 'styled-components'

import { Text } from 'styles/text'

export const Wrapper = styled(Text).attrs({ as: 'footer' })(({ theme }) => {
  return css`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-auto-flow: column;
    gap: ${theme.space[0]};
    opacity: 0.6;

    a:hover,
    a:focus,
    a:active {
      color: ${theme.colors.icons.default};
    }
  `
})
