import React from 'react'

import { ExternalLink } from 'components/external-link'
import { Card, Props as CardProps } from 'components/card'
import { Section } from 'styles/layout'
import { Text } from 'styles/text'

import { SeeMoreWrapper, CardsWrapper } from './styles'

type Props = {
  items: CardProps[]
  data: {
    title: string
    ctaText: string
    ctaUrl: string
  }
}

export const RotatingCards = ({ items, data }: Props) => (
  <Section fullWidth noGutter>
    <Text as='h2' size={2} textAlign='center' mb={2}>
      {data.title}
    </Text>

    <CardsWrapper>
      {items.map(item => (
        <Card key={item.title} {...item} />
      ))}
    </CardsWrapper>

    <SeeMoreWrapper>
      <ExternalLink to={data.ctaUrl}>
        <Text as='span' size={0} color='muted' textLink draggable={false}>
          {data.ctaText}
        </Text>
      </ExternalLink>
    </SeeMoreWrapper>
  </Section>
)
