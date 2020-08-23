import React from 'react'

import { Section } from 'styles/layout'
import { Text, Span } from 'styles/text'
import { Icon } from 'components/icon'

import { Wrapper, Icons } from './styles'

type Props = {}

export const Hero: React.FC<Props> = () => (
  <Section>
    <Wrapper>
      <div>
        <Text size={7} weight='bold' upper>
          Sean{' '}
          <Span size={6} block>
            Baines
          </Span>
        </Text>

        <Text size={4} weight='bold' color='primary'>
          (mrseanbaines)
        </Text>
      </div>

      <div>
        <hgroup>
          <Text size={2} color='muted' mb={0}>
            Filium multavit
          </Text>

          <Text as='h1' size={4} mb={1}>
            Sed ut alterum aspernandum sentiamus alii autem quibus
          </Text>
        </hgroup>

        <Text size={1} color='muted' mb={1}>
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

        <Icons>
          <Icon icon='github' />
          <Icon icon='twitter' />
          <Icon icon='linkedin' />
        </Icons>
      </div>
    </Wrapper>
  </Section>
)
