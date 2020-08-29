import React from 'react'

import { Card } from 'components/card'
import { Section } from 'styles/layout'

import { Wrapper } from './styles'

type Props = {}

export const RotatingCards: React.FC<Props> = () => (
  <Section fullWidth>
    <Wrapper>
      <Card />
      <Card />
      <Card />
      <Card />
    </Wrapper>
  </Section>
)
