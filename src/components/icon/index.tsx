import React from 'react'
import * as reactIconsGr from 'react-icons/gr'
import * as reactIconsAi from 'react-icons/ai'
import * as reactIconsFa from 'react-icons/fa'
import * as reactIconsRi from 'react-icons/ri'
import * as reactIconsVsc from 'react-icons/vsc'
import * as reactIconsSi from 'react-icons/si'
import { SpaceProps } from 'styled-system'

import { ReactComponent as ContactIcon } from 'images/contact.svg'
import { ReactComponent as HeartIcon } from 'images/heart.svg'
import { theme } from 'theme'

import { IconWrapper } from './styles'

const icons = {
  ...reactIconsGr,
  ...reactIconsAi,
  ...reactIconsFa,
  ...reactIconsRi,
  ...reactIconsVsc,
  ...reactIconsSi,
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
