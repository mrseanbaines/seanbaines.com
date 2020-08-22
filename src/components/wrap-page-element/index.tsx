import React from 'react'

import { Reset } from 'styles/reset'

export const WrapPageElement: React.FC = ({ children }) => (
  <>
    <Reset />

    {children}
  </>
)
