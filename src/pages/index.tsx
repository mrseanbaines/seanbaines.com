import React from 'react'
import { PageProps } from 'gatsby'

import { Hero } from 'sections/hero'

type Props = PageProps

const IndexPage: React.FC<Props> = () => (
  <main>
    <Hero />
  </main>
)

export default IndexPage
