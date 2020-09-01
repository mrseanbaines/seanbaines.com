import React from 'react'

import { Icon } from 'components/icon'
import { Span } from 'styles/text'

import { Wrapper } from './styles'

export type Props = {}

export const Footer: React.FC<Props> = () => (
  <Wrapper color='muted' weight='semibold' mb={2}>
    <Span>Built with</Span>
    <Icon icon='gatsby' color='muted' />
    <Span>and deployed on</Span>
    <Icon icon='vercel' color='muted' />
  </Wrapper>
)
