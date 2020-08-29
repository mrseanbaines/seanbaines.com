import React from 'react'
import * as simpleIcons from '@icons-pack/react-simple-icons'

import { theme } from 'theme'

import { IconWrapper, IconWrapperProps } from './styles'

const icons = {
  babel: simpleIcons.Babel,
  css3: simpleIcons.Css3,
  eslint: simpleIcons.Eslint,
  gatsby: simpleIcons.Gatsby,
  git: simpleIcons.Git,
  github: simpleIcons.Github,
  html5: simpleIcons.Html5,
  javascript: simpleIcons.Javascript,
  jest: simpleIcons.Jest,
  linkedin: simpleIcons.Linkedin,
  markdown: simpleIcons.Markdown,
  netlify: simpleIcons.Netlify,
  nodeDotJs: simpleIcons.NodeDotJs,
  postman: simpleIcons.Postman,
  prettier: simpleIcons.Prettier,
  reactJs: simpleIcons.ReactJs,
  reactrouter: simpleIcons.Reactrouter,
  redux: simpleIcons.Redux,
  sass: simpleIcons.Sass,
  storybook: simpleIcons.Storybook,
  styledComponents: simpleIcons.StyledComponents,
  twitter: simpleIcons.Twitter,
  typescript: simpleIcons.Typescript,
  vercel: simpleIcons.Vercel,
  visualstudiocode: simpleIcons.Visualstudiocode,
  webpack: simpleIcons.Webpack,
  yarn: simpleIcons.Yarn,
}

export type Props = IconWrapperProps & {
  color?: keyof typeof theme.colors.icons
  size?: number
  icon: keyof typeof icons
}

export const Icon: React.FC<Props> = ({ color = 'default', size = 0, icon, ...props }) => {
  if (!!size && !theme.sizes.icon[size]) {
    throw new Error('Invalid `size` prop')
  }

  const IconComponent = icons[icon]

  return (
    <IconWrapper {...props}>
      <IconComponent color={theme.colors.icons[color]} size={theme.sizes.icon[size]} />
    </IconWrapper>
  )
}
