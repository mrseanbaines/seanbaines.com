import React from 'react'
import { GatsbyBrowser } from 'gatsby'

import { WrapPageElement } from 'components/wrap-page-element'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => (
  <WrapPageElement>{element}</WrapPageElement>
)
