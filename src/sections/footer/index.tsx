import React from 'react'

import { Icon } from 'components/icon'
import { Span } from 'styles/text'

import { Wrapper } from './styles'

export type Props = {
  data: {
    text1: string
    text2: string
  }
}

export const Footer: React.FC<Props> = ({ data }) => (
  <Wrapper color='muted' weight='semibold' mb={2}>
    <Span>{data.text1}</Span>
    <Icon icon='SiGatsby' color='muted' />
    <Span>{data.text2}</Span>
    <Icon icon='SiVercel' color='muted' />
  </Wrapper>
)
