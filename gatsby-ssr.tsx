import React from 'react'
import { GatsbySSR } from 'gatsby'

import { WrapPageElement } from 'components/wrap-page-element'

// TODO: Use GatsbySSR['wrapPageElement'] directly if possible
type RequiredWrapPageElement = Required<GatsbySSR>['wrapPageElement']
type Fn = (...args: Parameters<RequiredWrapPageElement>) => ReturnType<RequiredWrapPageElement>

export const wrapPageElement: Fn = ({ element, props }) => <WrapPageElement {...props}>{element}</WrapPageElement>
