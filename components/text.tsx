import React from 'react'

import { Styles } from './types'

interface Props {
  x: number
  y: number
  styles?: Styles
}

const Text: React.FC<Props> = (props) => {
  const { children, x, y, styles = {} } = props

  if (styles.fill == null) {
    styles.fill = '#fff'
  }

  return (
    <text x={x} y={y} {...styles}>
      {children}
    </text>
  )
}

export default Text
