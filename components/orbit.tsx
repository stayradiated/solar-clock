import React from 'react'

import DateContext from './context-date'
import SVGContext from './context-svg'
import Ellipse from './ellipse'
import Circle from './circle'
import Text from './text'
import { jdn, eccentricAnomaly, trueAnomaly } from './utils'

interface Props {
  eccentricity: number
  starRadius: number
  planetRadius: number
}

const Orbit: React.FC<Props> = (props) => {
  const { eccentricity, starRadius, planetRadius } = props

  const { date, de } = React.useContext(DateContext)
  const { width, height, centerX, centerY } = React.useContext(SVGContext)

  const Tp = 1.000017
  const omegaP = (102.937683 * Math.PI) / 180
  const epsP = (100.464572 * Math.PI) / 180
  const meanAnomaly = (Math.PI * 2 * de) / (365.242191 * Tp) + epsP - omegaP

  const EP = eccentricAnomaly(eccentricity, meanAnomaly)
  const niP = trueAnomaly(eccentricity, EP)
  const LP = niP
  const RP = (1 - eccentricity ** 2) / (1 + eccentricity * Math.cos(niP))

  const major = 1
  const minor = Math.sqrt(1 - eccentricity ** 2)

  const size = 0.5 * Math.min(width, height - 30) - 30

  const planetX =
    centerX + eccentricity * size + major * size * RP * Math.cos(LP)
  const planetY = centerY + -major * size * RP * Math.sin(LP)

  const starX = centerX + eccentricity * size
  const starY = centerY

  return (
    <>
      <Text x={10} y={30}>
        {date.toISODate()}
      </Text>
      <Ellipse
        cx={centerX}
        cy={centerY}
        rx={major * size}
        ry={minor * size}
        styles={{
          stroke: '#e74c3c',
          strokeWidth: 2,
          strokeDasharray: '10',
        }}
      />
      <Circle
        cx={starX}
        cy={starY}
        r={starRadius}
        styles={{ fill: '#f1c40f' }}
      />
      <Circle
        cx={planetX}
        cy={planetY}
        r={planetRadius}
        styles={{ fill: '#3498db' }}
      />
    </>
  )
}

export default Orbit
