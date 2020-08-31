import React from 'react'

import { Card, Props as CardProps } from 'components/card'
import { Section } from 'styles/layout'
import { Text } from 'styles/text'

import { SeeMoreWrapper, CardsWrapper } from './styles'

type Props = {
  items: CardProps[]
}

export const RotatingCards: React.FC<Props> = ({ items }) => (
  <Section fullWidth noGutter>
    <Text size={2} textAlign='center' mb={2}>
      Quid ex ea voluptate velit
    </Text>

    <CardsWrapper>
      {items.map(item => (
        <Card key={item.title} {...item} />
      ))}
    </CardsWrapper>

    <SeeMoreWrapper>
      <Text as='a' size={0} color='muted' textLink>
        See more on GitHub
      </Text>
    </SeeMoreWrapper>
  </Section>
)
