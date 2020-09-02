import React from 'react'

import { Section, Row } from 'styles/layout'
import { Text, Span } from 'styles/text'
import { Icon } from 'components/icon'
import { ExternalLink } from 'components/external-link'

import { TitleWrapper, Icons, CTA, CTAGroup } from './styles'

export type Props = {
  data: {
    pretitle: string
    title: string
    body: string
    social: {
      github: string
      twitter: string
      linkedin: string
    }
  }
}

export const Hero: React.FC<Props> = ({ data }) => (
  <Section>
    <Row offset={1}>
      <TitleWrapper>
        <Text as='h1' size={7} weight='bold' upper>
          Sean{' '}
          <Span size={6} block>
            Baines
          </Span>
        </Text>

        <Text size={4} weight='bold' color='primary' mb={2}>
          (mrseanbaines)
        </Text>

        <CTAGroup>
          <a href='mailto:mrseanbaines@gmail.com'>
            <CTA>
              <Icon icon='contact' />
              <Text size={0}>Get in touch</Text>
            </CTA>
          </a>

          <button type='button'>
            <CTA>
              <Icon icon='heart' />
              <Text size={0}>Like</Text>
            </CTA>
          </button>
        </CTAGroup>
      </TitleWrapper>

      <div>
        <hgroup>
          <Text as='h2' size={2} color='muted' mb={0}>
            {data.pretitle}
          </Text>

          <Text as='h3' size={4} mb={1}>
            {data.title}
          </Text>
        </hgroup>

        <Text color='muted' mb={1}>
          {data.body}
        </Text>

        <Icons>
          <ExternalLink to={`https://github.com/${data.social.github}`}>
            <Icon icon='github' />
          </ExternalLink>
          <ExternalLink to={`https://twitter.com/${data.social.twitter}`}>
            <Icon icon='twitter' />
          </ExternalLink>
          <ExternalLink to={`https://www.linkedin.com/in/${data.social.linkedin}`}>
            <Icon icon='linkedin' />
          </ExternalLink>
        </Icons>
      </div>
    </Row>
  </Section>
)
