import React from 'react'

import { Section } from 'styles/layout'
import { Text } from 'styles/text'
import { Icon } from 'components/icon'

import { Wrapper, IconsWrapper, Icons } from './styles'

type Props = {}

const icons = [
  'babel',
  'css3',
  'eslint',
  'gatsby',
  'git',
  'github',
  'html5',
  'javascript',
  'jest',
  'markdown',
  'netlify',
  'nodeDotJs',
  'postman',
  'prettier',
  'reactJs',
  'reactrouter',
  'redux',
  'sass',
  'storybook',
  'styledComponents',
  'typescript',
  'vercel',
  'visualstudiocode',
  'webpack',
  'yarn',
] as const

export const TechStack: React.FC<Props> = () => (
  <Section fullWidth>
    <Wrapper>
      <Text size={2} align='center'>
        Quid ex ea voluptate velit
      </Text>

      <IconsWrapper>
        <Icons>
          {icons.map(icon => (
            <Icon icon={icon} size={1} color='muted' />
          ))}
        </Icons>
      </IconsWrapper>
    </Wrapper>
  </Section>
)
