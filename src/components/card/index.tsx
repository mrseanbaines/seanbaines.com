import React from 'react'

import { Text } from 'styles/text'

import { Wrapper } from './styles'

export type Props = {
  title: string
  body: string
  extras: string[]
  url: string
}

export const Card: React.FC<Props> = ({ title, body, extras, url }) => (
  <Wrapper as='a' href={url}>
    <Text weight='semibold' mb={0}>
      {title}
    </Text>

    <Text size={0} color='muted' mb={1}>
      {body}
    </Text>

    <Text size={0}>{extras.join(', ').concat(' ...')}</Text>
  </Wrapper>
)
