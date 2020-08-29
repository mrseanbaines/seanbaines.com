import React from 'react'

import { Icon } from 'components/icon'

import { Wrapper } from './styles'

export type Props = {}

export const Footer: React.FC<Props> = () => (
  <Wrapper as='footer' color='muted' weight='bold' mb={2}>
    Built with <Icon icon='gatsby' color='muted' /> and deployed on <Icon icon='vercel' color='muted' />
  </Wrapper>
)
