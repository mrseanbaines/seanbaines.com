import React from 'react'

import { IconCard } from 'components/icon-card'
import { Section, Row } from 'styles/layout'
import { Text } from 'styles/text'
import vscodeScreenshot from 'images/vscode-screenshot-1.png'

import { IconCardsWrapper, Img } from './styles'

export type Props = {}

export const IconCardsWithImage: React.FC<Props> = () => (
  <Section>
    <Row offset={2}>
      <Text size={5} weight='bold' textAlign={['right', 'left']} mb={3}>
        Torquatos nostros quos dolores et dolore
      </Text>
    </Row>

    <Row offset={1}>
      <IconCardsWrapper>
        <IconCard
          icon='html5'
          title='Omne animal simul'
          body='At vero eos censes aut officiis debitis aut fugiat aliquid praeter voluptatem ipsam per se repellere idque facere nondum'
          stroke={0}
        />
        <IconCard
          icon='css3'
          title='Filium multavit'
          body='In oculis quidem rerum necessitatibus saepe eveniet ut earum rerum facilis est et dolore disputandum putant sed'
          stroke={1}
        />
        <IconCard
          icon='typescript'
          title='Alii autem quibus'
          body='Quae fuerit causa mox videro interea hoc tenebo si mihi probabis ea quae sine causa quae fuerit causa nollem'
          stroke={2}
        />
        <IconCard
          icon='javascript'
          title='Magnum periculum'
          body='Ut placet inquam tum dicere exorsus est consecutus laudem et rationibus confirmare tantum satis esse quid est et negent'
          stroke={3}
        />
      </IconCardsWrapper>

      <Img src={vscodeScreenshot} alt='Visual Studio Code screenshot' />
    </Row>
  </Section>
)
