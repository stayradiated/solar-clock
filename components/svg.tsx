import React from 'react'

import { Provider } from './context-svg'

interface Props {
  width: number
  height: number
}

const SVG: React.FC<Props> = (props) => {
  const { children, width, height } = props

  const SVGContext = React.useMemo(
    () => ({
      width,
      height,
      centerX: width / 2,
      centerY: height / 2,
    }),
    [width, height],
  )

  return (
    <svg width={width} height={height}>
      <Provider value={SVGContext}>{children}</Provider>
    </svg>
  )
}

export default SVG
