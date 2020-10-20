import React from 'react'

import { Section, Row } from 'styles/layout'
import { Text, Span } from 'styles/text'
import { Icon } from 'components/icon'
import { ExternalLink } from 'components/external-link'
import { useToggle } from 'hooks/use-toggle'

import { TitleWrapper, Icons, CTA, HeartCTA, CTAGroup } from './styles'

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

export const Hero: React.FC<Props> = ({ data }) => {
  const [liked, toggleLiked, setLiked] = useToggle()

  const LIKED_KEY = 'liked'
  const LIKED_VALUE = 'true'

  React.useEffect(() => {
    if (!!window.localStorage.getItem(LIKED_KEY)) {
      setLiked(true)
    }
  }, [setLiked])

  React.useEffect(() => {
    if (liked) {
      window.localStorage.setItem(LIKED_KEY, LIKED_VALUE)
    } else {
      window.localStorage.removeItem(LIKED_KEY)
    }
  }, [liked])

  return (
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
                <Icon icon='ContactIcon' />
                <Text size={0}>Get in touch</Text>
              </CTA>
            </a>

            <button type='button' onClick={toggleLiked}>
              <HeartCTA liked={liked}>
                <Icon icon='HeartIcon' />
                <Text size={0}>Like</Text>
              </HeartCTA>
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
              <Icon icon='GrGithub' />
            </ExternalLink>
            <ExternalLink to={`https://twitter.com/${data.social.twitter}`}>
              <Icon icon='GrTwitter' />
            </ExternalLink>
            <ExternalLink to={`https://www.linkedin.com/in/${data.social.linkedin}`}>
              <Icon icon='GrLinkedinOption' />
            </ExternalLink>
          </Icons>
        </div>
      </Row>
    </Section>
  )
}
