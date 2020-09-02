declare module '*.woff2' {
  const src: string

  export default src
}

declare module '*.svg' {
  import React from 'react'

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>

  const src: string

  export default src
}

declare module '*.png' {
  const src: string

  export default src
}
