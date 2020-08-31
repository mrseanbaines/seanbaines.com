import React from 'react'

import { IconCard } from 'components/icon-card'
import { Section } from 'styles/layout'
import { Text } from 'styles/text'

import { IconCardsWrapper } from './styles'

type Props = {}

export const IconCardsRow: React.FC<Props> = () => (
  <Section>
    <Text size={5} weight='bold' textAlign='center' mb={3}>
      Quae fuerit causa mox
    </Text>

    <IconCardsWrapper>
      <IconCard
        large
        icon='reactrouter'
        title='Omne animal simul'
        body='At vero eos censes aut officiis debitis aut fugiat aliquid praeter voluptatem ipsam per se repellere idque facere nondum'
      />
      <IconCard
        large
        icon='reactJs'
        title='Filium multavit'
        body='In oculis quidem rerum necessitatibus saepe eveniet ut earum rerum facilis est et dolore disputandum putant sed'
      />
      <IconCard
        large
        icon='redux'
        title='Alii autem quibus'
        body='Quae fuerit causa mox videro interea hoc tenebo si mihi probabis ea quae sine causa quae fuerit causa nollem'
      />
    </IconCardsWrapper>
  </Section>
)
