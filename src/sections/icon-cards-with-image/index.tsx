import React from 'react'

import { IconCard, Props as IconCardProps } from 'components/icon-card'
import { Section, Row } from 'styles/layout'
import { Text } from 'styles/text'
import vscodeScreenshot from 'images/vscode-screenshot-1.png'

import { IconCardsWrapper, Img } from './styles'

export type Props = {
  data: {
    title: string
    cards: (Pick<IconCardProps, 'title' | 'body' | 'icon'> & { id: string })[]
  }
}

export const IconCardsWithImage: React.FC<Props> = ({ data }) => (
  <Section>
    <Row offset={2}>
      <Text size={5} weight='bold' textAlign={['right', 'left']} mb={3}>
        {data.title}
      </Text>
    </Row>

    <Row offset={1}>
      <IconCardsWrapper>
        {data.cards.map(({ id, ...card }, i) => (
          <IconCard {...card} stroke={i} key={id} />
        ))}
      </IconCardsWrapper>

      <Img src={vscodeScreenshot} alt='Visual Studio Code screenshot' />
    </Row>
  </Section>
)
