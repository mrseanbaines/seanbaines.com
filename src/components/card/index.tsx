import React from 'react'

import { Text } from 'styles/text'

import { Wrapper } from './styles'

type Props = {}

export const Card: React.FC<Props> = () => (
  <Wrapper>
    <Text mb={0} weight='bold'>
      budgie-frontend
    </Text>

    <Text size={0} color='muted' mb={2}>
      SPA React app which pulls in transactions from the backend API, lists them by month, allows you to assign
      categories and gives you a breakdown of your expenses per category.
    </Text>

    <Text size={0}>TypeScript</Text>
  </Wrapper>
)
