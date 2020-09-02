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
    textLink?: boolean
    upper?: boolean
    weight?: keyof typeof theme.fontWeights
  }

const text = ({ theme, color, size, weight, upper, block, textLink }: TextProps) => {
  if (isDefined(size) && !theme.fontStyles[size]) {
    throw new Error('Invalid `size` prop')
  }

  const upperStyles = css`
    text-transform: uppercase;
  `

  const blockStyles = css`
    display: block;
  `

  const textLinkStyles = css`
    --border-thickness: 4px;
    --line-height: ${(isDefined(size) && theme.fontStyles[size]?.lineHeight) || 1.5};

    cursor: pointer;
    white-space: nowrap;
    color: transparent;
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      to bottom,
      ${theme.colors.text.default} 0%,
      ${theme.colors.text.default} 50%,
      ${theme.colors.text.white} 50%,
      ${theme.colors.text.white} 100%
    );
    background-size: auto calc((2em * var(--line-height)) + var(--border-thickness));
    transition: background-position-y 340ms cubic-bezier(1, -0.5, 0, 1.5);
    line-height: var(--line-height);
    position: relative;

    ::after {
      pointer-events: none;
      content: '';
      width: 100%;
      height: var(--border-thickness);
      bottom: calc(var(--border-thickness) * -1);
      left: 0;
      display: block;
      background: ${theme.colors.primary};
      transition: inherit;
      transition-property: height, bottom;
      z-index: -1;
      position: absolute;
    }

    :hover,
    :focus,
    :active {
      background-position-y: 100%;

      ::after {
        height: 100%;
        bottom: 0;
      }
    }
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
    ${textLink && textLinkStyles}
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
