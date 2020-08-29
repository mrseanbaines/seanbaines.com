import styled, { css, DefaultTheme } from 'styled-components'
import { space, SpaceProps, textAlign, TextAlignProps } from 'styled-system'

import { theme } from 'theme'

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
  if (!!size && !theme.fontStyles[size]) {
    throw new Error('Invalid `size` prop')
  }

  const upperStyles = css`
    text-transform: uppercase;
  `

  const blockStyles = css`
    display: block;
  `

  return css`
    color: ${(!!color && theme.colors.text[color]) || 'inherit'};
    font-family: ${theme.fonts.primary};
    font-size: ${(!!size && theme.fontStyles[size]?.size) || 'inherit'};
    font-weight: ${(!!weight && theme.fontWeights[weight]) || 'inherit'};
    line-height: ${(!!size && theme.fontStyles[size]?.lineHeight) || 'inherit'};

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
