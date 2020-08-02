import React from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'

import SVG from '../components/svg'
import Orbit from '../components/orbit'
import DateControl from '../components/date-control'

import styles from '../styles/Home.module.css'

const App: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      <DateControl>
        <AutoSizer>
          {({ width, height }) => (
            <SVG width={width} height={height}>
              <Orbit eccentricity={0.4} starRadius={50} planetRadius={20} />
            </SVG>
          )}
        </AutoSizer>
      </DateControl>
    </div>
  )
}

export default App
