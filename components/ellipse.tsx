import React from 'react'

import { Styles } from './types'

interface Props {
  cx: number
  cy: number
  rx: number
  ry: number
  styles?: Styles
}

const Ellipse: React.FC<Props> = (props) => {
  const { cx, cy, rx, ry, styles } = props

  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} {...styles} />
}

export default Ellipse
