import styled, { css, DefaultTheme } from 'styled-components'
import { space, SpaceProps, textAlign, TextAlignProps } from 'styled-system'

import { theme } from 'theme'
import { isDefined } from 'utils/is-defined'

export type ThemeProps = {
  theme: DefaultTheme
}

export type TextProps = ThemeProps &
  TextAlignProps &
  SpaceProps & {
    block?: boolean
    color?: keyof typeof theme.colors.text
    size?: number
    upper?: boolean
    weight?: keyof typeof theme.fontWeights
  }

const text = ({ theme, color, size, weight, upper, block }: TextProps) => {
  if (isDefined(size) && !theme.fontStyles[size]) {
    throw new Error('Invalid `size` prop')
  }

  const upperStyles = css`
    text-transform: uppercase;
  `

  const blockStyles = css`
    display: block;
  `

  return css`
    color: ${(isDefined(color) && theme.colors.text[color]) || 'inherit'};
    font-family: ${theme.fonts.primary};
    font-size: ${(isDefined(size) && theme.fontStyles[size]?.size) || 'inherit'};
    font-weight: ${(isDefined(weight) && theme.fontWeights[weight]) || 'inherit'};
    line-height: ${(isDefined(size) && theme.fontStyles[size]?.lineHeight) || 'inherit'};

    ${space}
    ${textAlign}
    ${upper && upperStyles}
    ${block && blockStyles}
  `
}

export const Text = styled.p<TextProps>(({ theme, color = 'default', size = 1, weight = 'medium', ...props }) => {
  return css`
    ${text({ theme, color, size, weight, ...props })}
  `
})

export const Span = styled.span<TextProps>(() => {
  return css`
    ${text}
  `
})
