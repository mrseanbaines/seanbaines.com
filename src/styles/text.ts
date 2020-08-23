import styled, { css, DefaultTheme } from 'styled-components'
import { space, SpaceProps } from 'styled-system'

import { theme } from 'theme'

type ThemeProps = {
  theme: DefaultTheme
}

type TextProps = ThemeProps &
  SpaceProps & {
    color?: keyof typeof theme.colors.text
    size?: number
    weight?: keyof typeof theme.fontWeights
  }

const text = ({ theme, color, size, weight }: TextProps) => {
  if (!!size && !theme.fontStyles[size]) {
    throw new Error('Invalid `size` prop')
  }

  return css`
    ${space}

    color: ${(!!color && theme.colors.text[color]) || 'inherit'};
    font-family: ${theme.fonts.primary};
    font-size: ${(!!size && theme.fontStyles[size].size) || 'inherit'};
    font-weight: ${(!!weight && theme.fontWeights[weight]) || 'inherit'};
    line-height: ${(!!size && theme.fontStyles[size].lineHeight) || 'inherit'};
  `
}

export const Text = styled.p<TextProps>(({ theme, color = 'default', size = 1, weight = 'medium' }) => {
  return css`
    ${text({ theme, color, size, weight })}
  `
})

export const Span = styled.span<TextProps>(() => {
  return css`
    ${text}
  `
})
