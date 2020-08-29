import React from 'react'

import { Icon, Props as IconProps } from 'components/icon'
import { Text } from 'styles/text'

export type Props = {
  icon: IconProps['icon']
  title: string
  body: string
}

export const IconCard: React.FC<Props> = ({ icon, title, body }) => (
  <div>
    <Icon icon={icon} size={1} mb={0} />

    <Text size={2} mb={0}>
      {title}
    </Text>

    <Text color='muted'>{body}</Text>
  </div>
)
