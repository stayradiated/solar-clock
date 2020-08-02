import React from 'react'

interface ContextProps {
  width: number
  height: number
  centerX: number
  centerY: number
}

const SVGContext = React.createContext<ContextProps>({
  width: null,
  height: null,
  centerX: null,
  centerY: null,
})

const { Provider, Consumer } = SVGContext

export default SVGContext

export { Provider, Consumer }
