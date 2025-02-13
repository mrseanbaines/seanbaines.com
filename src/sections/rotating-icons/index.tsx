import React from 'react'

import { Section, PaddingX } from 'styles/layout'
import { Text } from 'styles/text'
import { Icon } from 'components/icon'

import { IconsWrapper, Icons } from './styles'

export type Props = {
  data: {
    title: string
  }
}

const icons = [
  'SiApollographql',
  'SiBabel',
  'SiCss3',
  'SiEslint',
  'SiGatsby',
  'SiGit',
  'SiGithub',
  'SiGraphql',
  'SiHtml5',
  'SiJavascript',
  'SiJest',
  'SiMarkdown',
  'SiNetlify',
  'SiNodedotjs',
  'SiPostman',
  'SiPrettier',
  'SiReact',
  'SiReactrouter',
  'SiRedux',
  'SiSass',
  'SiStorybook',
  'SiStyledcomponents',
  'SiTypescript',
  'SiVercel',
  'VscVscode',
  'SiWebpack',
  'SiYarn',
] satisfies React.ComponentProps<typeof Icon>['icon'][]

export const RotatingIcons = ({ data }: Props) => (
  <Section noGutter fullWidth>
    <PaddingX>
      <Text as='h2' size={2} textAlign='center' mb={2}>
        {data.title}
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
