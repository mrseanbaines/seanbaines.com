import styled, { css } from 'styled-components'
import { space, SpaceProps } from 'styled-system'

export type IconWrapperProps = SpaceProps

export const IconWrapper = styled.div<IconWrapperProps>(() => {
  return css`
    ${space}
    line-height: 0;
    position: relative;
    display: inline-block;
    width: auto;

    svg {
      overflow: initial;
    }
  `
})
