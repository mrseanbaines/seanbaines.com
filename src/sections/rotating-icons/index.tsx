import React from 'react'

import { Section, PaddingX } from 'styles/layout'
import { Text } from 'styles/text'
import { Icon } from 'components/icon'

import { IconsWrapper, Icons } from './styles'

export type Props = {}

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

export const RotatingIcons: React.FC<Props> = () => (
  <Section noGutter fullWidth>
    <PaddingX>
      <Text size={2} textAlign='center' mb={2}>
        Quid ex ea voluptate velit
      </Text>
    </PaddingX>

    <IconsWrapper>
      <Icons>
        {icons.map(icon => (
          <Icon key={icon} icon={icon} size={1} color='muted' />
        ))}
      </Icons>
    </IconsWrapper>
  </Section>
)
