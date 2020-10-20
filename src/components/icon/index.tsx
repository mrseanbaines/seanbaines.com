import React from 'react'
import * as reactIcons from 'react-icons/all'
import { SpaceProps } from 'styled-system'

import { ReactComponent as ContactIcon } from 'images/contact.svg'
import { ReactComponent as HeartIcon } from 'images/heart.svg'
import { theme } from 'theme'

import { IconWrapper } from './styles'

const icons = {
  ...reactIcons,
  ContactIcon,
  HeartIcon,
}

export type Props = SpaceProps & {
  color?: keyof typeof theme.colors.icons
  size?: number
  icon: keyof typeof icons
}

export const Icon: React.FC<Props> = ({ color = 'default', size = 0, icon }) => {
  if (!!size && !theme.sizes.icon[size]) {
    throw new Error('Invalid `size` prop')
  }

  const IconComponent = icons[icon]

  return (
    <IconWrapper color={color} size={size}>
      <IconComponent color='currentColor' />
    </IconWrapper>
  )
}
