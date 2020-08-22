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
    },
    highlight: [colors.green, colors.orange, colors.red, colors.yellow],
  },
  fonts: {
    primary: `'${fonts.primary}', 'Roboto', 'Helvetica Neue', sans-serif`,
  },
  fontSizes: ['14px', '16px', '20px', '28px', '36px', '56px', '96px'],
  fontWeights: {
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  radii: {
    rounded: ['8px'],
  },
  sizes: {
    icon: ['24px', '36px', '60px'],
  },
  space: ['8px', '24px', '32px', '64px', '80px'],
}
