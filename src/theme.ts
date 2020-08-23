export const fonts = {
  primary: 'Jost',
}

export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  grey: ['#454A4F', '#9CA3AF'],
  primary: '#FFB4A2',
  green: '#E5FEC9',
  orange: '#FEE6C6',
  red: '#FEE0E0',
  yellow: '#FFF7CC',
}

const toMediaQuery = (bp: string) => `@media screen and (min-width: ${bp})`

export const theme = {
  borders: {
    default: `1px solid ${colors.grey[1]}`,
  },
  colors: {
    primary: colors.primary,
    background: {
      default: colors.white,
    },
    icons: {
      default: colors.grey[0],
      muted: colors.grey[1],
    },
    text: {
      default: colors.grey[0],
      muted: colors.grey[1],
      primary: colors.primary,
    },
    highlight: [colors.green, colors.orange, colors.red, colors.yellow],
  },
  fonts: {
    primary: `'${fonts.primary}', 'Roboto', 'Helvetica Neue', sans-serif`,
  },
  fontStyles: [
    { size: '0.875rem', lineHeight: 1.6 },
    { size: '1rem', lineHeight: 1.5 },
    { size: '1.25rem', lineHeight: 1.4 },
    { size: '1.75rem', lineHeight: 1.3 },
    { size: '2.25rem', lineHeight: 1.2 },
    { size: '3.5rem', lineHeight: 1.1 },
    { size: '4.5rem', lineHeight: 1.0 },
    { size: '6rem', lineHeight: 0.9 },
  ],
  fontWeights: {
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  mediaQueries: {
    xs: toMediaQuery('576px'),
    sm: toMediaQuery('768px'),
    md: toMediaQuery('992px'),
    lg: toMediaQuery('1200px'),
  },
  radii: {
    rounded: ['8px'],
  },
  sizes: {
    icon: ['1.5rem', '2.25rem', '3.75rem'],
  },
  space: ['0.5rem', '1.5rem', '2rem', '4rem', '5rem'],
}
