import React from 'react'
import { WrapPageElementNodeArgs } from 'gatsby'

import { WrapPageElement } from 'components/wrap-page-element'

// TODO: Use GatsbySSR['wrapPageElement']?
export const wrapPageElement = ({ element }: WrapPageElementNodeArgs) => <WrapPageElement>{element}</WrapPageElement>
