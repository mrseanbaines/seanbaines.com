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
      primary: colors.primary,
    },
    highlight: [colors.green, colors.orange, colors.red, colors.yellow],
  },
  fonts: {
    primary: `'${fonts.primary}', 'Roboto', 'Helvetica Neue', sans-serif`,
  },
  fontStyles: [
    { size: '14px', lineHeight: 1.6 },
    { size: '16px', lineHeight: 1.5 },
    { size: '20px', lineHeight: 1.4 },
    { size: '28px', lineHeight: 1.3 },
    { size: '36px', lineHeight: 1.2 },
    { size: '56px', lineHeight: 1.1 },
    { size: '96px', lineHeight: 1.0 },
  ],
  fontWeights: {
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  radii: {
    rounded: ['8px'],
  },
  sizes: {
    icon: ['24px', '36px', '60px'],
  },
  space: ['8px', '24px', '32px', '64px', '80px'],
}
