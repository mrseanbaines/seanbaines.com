import React from 'react'
import { GatsbyBrowser } from 'gatsby'

import Reset from 'styles/reset'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <>
      <Reset />

      {element}
    </>
  )
}
