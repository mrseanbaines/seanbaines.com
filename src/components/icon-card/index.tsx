import React from 'react'

import { Icon, Props as IconProps } from 'components/icon'
import { Text } from 'styles/text'

import { IconWrapper } from './styles'

export type Props = {
  icon: IconProps['icon']
  title: string
  body: string
  large?: boolean
  stroke?: number
}

export const IconCard = ({ icon, title, body, large, stroke }: Props) => (
  <div>
    <IconWrapper stroke={stroke} large={large}>
      <Icon icon={icon} size={large ? 2 : 1} />
    </IconWrapper>

    <Text as='h3' size={large ? 3 : 2} mb={0}>
      {title}
    </Text>

    <Text color='muted'>{body}</Text>
  </div>
)
