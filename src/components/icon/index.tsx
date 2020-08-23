import React from 'react'
import { Github, Twitter, Linkedin } from '@icons-pack/react-simple-icons'

import { theme } from 'theme'

const icons = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
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
