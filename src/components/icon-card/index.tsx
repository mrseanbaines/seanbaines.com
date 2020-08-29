import React from 'react'

import { Icon, Props as IconProps } from 'components/icon'
import { Text } from 'styles/text'

export type Props = {
  icon: IconProps['icon']
  title: string
  body: string
  large?: boolean
}

export const IconCard: React.FC<Props> = ({ icon, title, body, large }) => (
  <div>
    <Icon icon={icon} size={large ? 2 : 1} mb={large ? 1 : 0} />

    <Text size={large ? 3 : 2} mb={0}>
      {title}
    </Text>

    <Text color='muted'>{body}</Text>
  </div>
)
