import React from 'react'

type AnchorProps = JSX.IntrinsicElements['a']

export type Props = Omit<AnchorProps, 'href'> & {
  to: AnchorProps['href']
}

export const ExternalLink: React.FC<Props> = ({ children, to, ...props }) => (
  <a href={to} target='_blank' rel='noreferrer' {...props}>
    {children}
  </a>
)
