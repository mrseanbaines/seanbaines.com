import styled, { css } from 'styled-components'

import stroke1 from 'images/stroke-1.svg'
import stroke2 from 'images/stroke-2.svg'
import stroke3 from 'images/stroke-3.svg'
import stroke4 from 'images/stroke-4.svg'
import { isDefined } from 'utils/is-defined'

import { Props } from './'

export type IconWrapperProps = Pick<Props, 'stroke' | 'large'>

export const IconWrapper = styled.div<IconWrapperProps>(({ theme, stroke, large }) => {
  const strokes = [stroke1, stroke2, stroke3, stroke4]

  if (isDefined(stroke) && !strokes[stroke]) {
    throw new Error('Invalid `stroke` prop')
  }

  return css`
    position: relative;
    display: inline-block;
    margin-bottom: ${theme.space[large ? 1 : 0]};

    &::before {
      content: '';
      width: ${theme.sizes.icon[large ? 3 : 2]};
      height: ${theme.sizes.icon[large ? 3 : 2]};
      display: block;
      position: absolute;
      bottom: 10%;
      left: 10%;
      z-index: -1;
      background-image: ${isDefined(stroke) && `url(${strokes[stroke]})`};
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  `
})
