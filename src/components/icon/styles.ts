import styled, { css } from 'styled-components'
import { space } from 'styled-system'

import { Props } from './'

export type IconWrapperProps = Pick<Props, 'color' | 'size'>

export const IconWrapper = styled.div<IconWrapperProps>(({ theme, color = 'default', size = 0 }) => {
  return css`
    ${space}
    line-height: 0;
    position: relative;
    display: inline-block;
    width: auto;
    color: ${theme.colors.icons[color]};

    svg {
      overflow: initial;
      width: ${theme.sizes.icon[size]};
      height: ${theme.sizes.icon[size]};
    }
  `
})
