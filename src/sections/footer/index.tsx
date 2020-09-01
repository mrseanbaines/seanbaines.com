import React from 'react'

import { Icon } from 'components/icon'
import { ExternalLink } from 'components/external-link'
import { Span } from 'styles/text'

import { Wrapper } from './styles'

export type Props = {}

export const Footer: React.FC<Props> = () => (
  <Wrapper color='muted' weight='semibold' mb={2}>
    <Span>Built with</Span>
    <ExternalLink to='https://www.gatsbyjs.com'>
      <Icon icon='gatsby' color='muted' />
    </ExternalLink>
    <Span>and deployed on</Span>
    <ExternalLink to='https://vercel.com'>
      <Icon icon='vercel' color='muted' />
    </ExternalLink>
  </Wrapper>
)
