import React from 'react'
import { DateTime } from 'luxon'

interface ContextProps {
  date: DateTime
  de: number
}

const DateContext = React.createContext<ContextProps>({
  date: null,
  de: 0,
})

const { Provider, Consumer } = DateContext

export default DateContext

export { Provider, Consumer }
