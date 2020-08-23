import React from 'react'
import {
  Babel,
  Css3,
  Eslint,
  Gatsby,
  Git,
  Github,
  Html5,
  Javascript,
  Jest,
  Linkedin,
  Markdown,
  Netlify,
  NodeDotJs,
  Postman,
  Prettier,
  ReactJs,
  Reactrouter,
  Redux,
  Sass,
  Storybook,
  StyledComponents,
  Twitter,
  Typescript,
  Vercel,
  Visualstudiocode,
  Webpack,
  Yarn,
} from '@icons-pack/react-simple-icons'

import { theme } from 'theme'

const icons = {
  babel: Babel,
  css3: Css3,
  eslint: Eslint,
  gatsby: Gatsby,
  git: Git,
  github: Github,
  html5: Html5,
  javascript: Javascript,
  jest: Jest,
  linkedin: Linkedin,
  markdown: Markdown,
  netlify: Netlify,
  nodeDotJs: NodeDotJs,
  postman: Postman,
  prettier: Prettier,
  reactJs: ReactJs,
  reactrouter: Reactrouter,
  redux: Redux,
  sass: Sass,
  storybook: Storybook,
  styledComponents: StyledComponents,
  twitter: Twitter,
  typescript: Typescript,
  vercel: Vercel,
  visualstudiocode: Visualstudiocode,
  webpack: Webpack,
  yarn: Yarn,
}

type Props = {
  color?: keyof typeof theme.colors.icons
  size?: number
  icon: keyof typeof icons
}

export const Icon: React.FC<Props> = ({ color = 'default', size = 0, icon }) => {
  if (!!size && !theme.sizes.icon[size]) {
    throw new Error('Invalid `size` prop')
  }

  const IconComponent = icons[icon]

  return <IconComponent color={theme.colors.icons[color]} size={theme.sizes.icon[size]} />
}
