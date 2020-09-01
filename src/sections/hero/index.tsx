import React from 'react'

import { Section, Row } from 'styles/layout'
import { Text, Span } from 'styles/text'
import { Icon } from 'components/icon'
import { ExternalLink } from 'components/external-link'

import { TitleWrapper, Icons } from './styles'

export type Props = {
  social: {
    github: string
    twitter: string
    linkedin: string
  }
}

export const Hero: React.FC<Props> = ({ social }) => (
  <Section>
    <Row offset={1}>
      <TitleWrapper>
        <Text size={7} weight='bold' upper>
          Sean{' '}
          <Span size={6} block>
            Baines
          </Span>
        </Text>

        <Text size={4} weight='bold' color='primary'>
          (mrseanbaines)
        </Text>
      </TitleWrapper>

      <div>
        <hgroup>
          <Text size={2} color='muted' mb={0}>
            Filium multavit
          </Text>

          <Text as='h1' size={4} mb={1}>
            Sed ut alterum aspernandum sentiamus alii autem quibus
          </Text>
        </hgroup>

        <Text color='muted' mb={1}>
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
          <ExternalLink to={`https://github.com/${social.github}`}>
            <Icon icon='github' />
          </ExternalLink>
          <ExternalLink to={`https://twitter.com/${social.twitter}`}>
            <Icon icon='twitter' />
          </ExternalLink>
          <ExternalLink to={`https://www.linkedin.com/in/${social.linkedin}`}>
            <Icon icon='linkedin' />
          </ExternalLink>
        </Icons>
      </div>
    </Row>
  </Section>
)
