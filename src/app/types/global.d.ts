declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg'{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const JPEG: any
  export default JPEG
}

declare module '*.svg' {
  import type React from 'react'

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare const __IS_DEV__: boolean
