import React from 'react'

import { IconCard, Props as IconCardProps } from 'components/icon-card'
import { Section } from 'styles/layout'
import { Text } from 'styles/text'

import { IconCardsWrapper, TitleWrapper } from './styles'

type Props = {
  data: {
    title: string
    cards: (Pick<IconCardProps, 'title' | 'body' | 'icon'> & { id: string })[]
  }
}

export const IconCardsRow: React.FC<Props> = ({ data }) => (
  <Section>
    <TitleWrapper>
      <Text as='h2' size={5} weight='bold' textAlign='center' mb={3}>
        {data.title}
      </Text>
    </TitleWrapper>

    <IconCardsWrapper>
      {data.cards.map(({ id, ...card }, i) => (
        <IconCard {...card} stroke={i} large key={id} />
      ))}
    </IconCardsWrapper>
  </Section>
)
