import React from 'react'

import { Section, Row } from 'styles/layout'
import { Text } from 'styles/text'
import vscodeScreenshot from 'images/vscode-screenshot-1.png'

import { Img } from './styles'

type Props = {}

export const IconCardsWithImage: React.FC<Props> = () => (
  <Section>
    <Row offset={2}>
      <Text size={5} weight='bold'>
        Torquatos nostros quos dolores et dolore
      </Text>
    </Row>

    <Row offset={1}>
      <div></div>

      <Img src={vscodeScreenshot} alt='Visual Studio Code screenshot' />
    </Row>
  </Section>
)
