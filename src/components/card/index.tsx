import React from 'react'

import { ExternalLink } from 'components/external-link'
import { Text } from 'styles/text'

import { Wrapper } from './styles'

export type Props = {
  title: string
  body: string
  extras: string[]
  url: string
}

export const Card = ({ title, body, extras, url }: Props) => (
  <Wrapper as={ExternalLink} to={url} draggable={false}>
    <Text weight='semibold' mb={0}>
      {title}
    </Text>

    <Text size={0} color='muted' mb={1}>
      {body}
    </Text>

    <Text size={0}>{extras.join(', ').concat(' ...')}</Text>
  </Wrapper>
)
