import React from 'react'

import { Styles } from './types'

interface Props {
  cx: number
  cy: number
  r: number
  styles?: Styles
}

const Circle: React.FC<Props> = (props) => {
  const { cx, cy, r, styles } = props

  return <circle cx={cx} cy={cy} r={r} {...styles} />
}

export default Circle
