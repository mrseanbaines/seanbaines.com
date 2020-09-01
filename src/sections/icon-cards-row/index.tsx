import React from 'react'

import { IconCard, Props as IconCardProps } from 'components/icon-card'
import { Section } from 'styles/layout'
import { Text } from 'styles/text'

import { IconCardsWrapper, TitleWrapper } from './styles'

type Props = {
  data: {
    title: string
    cards: Pick<IconCardProps, 'title' | 'body' | 'icon'>[]
  }
}

export const IconCardsRow: React.FC<Props> = ({ data }) => (
  <Section>
    <TitleWrapper>
      <Text size={5} weight='bold' textAlign='center' mb={3}>
        Quae fuerit causa mox
      </Text>
    </TitleWrapper>

    <IconCardsWrapper>
      {data.cards.map((card, i) => (
        <IconCard large icon={card.icon} title={card.title} body={card.body} stroke={i} />
      ))}
    </IconCardsWrapper>
  </Section>
)
