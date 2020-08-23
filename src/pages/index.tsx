import React from 'react'
import { PageProps } from 'gatsby'

import { Section } from 'styles/layout'
import { Text, Span } from 'styles/text'

type Props = PageProps

const IndexPage: React.FC<Props> = () => (
  <Section>
    <div>
      <hgroup>
        <Text size={2} color='muted' mb={0}>
          Filium multavit
        </Text>

        <Text as='h1' size={4} mb={1}>
          Sed ut alterum aspernandum sentiamus alii autem quibus
        </Text>
      </hgroup>

      <Text size={1} color='muted'>
        Probabo inquit sic agam ut summo bono dolorem eum iure{' '}
        <Span as='strong' color='default' weight='semibold'>
          reprehenderit
        </Span>{' '}
        qui{' '}
        <Span as='strong' color='default' weight='semibold'>
          blanditiis
        </Span>{' '}
        praesentium voluptatum deleniti atque in sanguinem suum tam egregios viros censes tantas res gessisse
      </Text>
    </div>
  </Section>
)

export default IndexPage
