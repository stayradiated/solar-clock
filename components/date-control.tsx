import React from 'react'
import { DateTime } from 'luxon'
import delay from 'delay'

import DateContext from './context-date'
import { jdn } from './utils'
import { rangeByDay } from './date-utils'

interface Props {}

const DateControl: React.FC<Props> = (props) => {
  const { children } = props

  const [date, setDate] = React.useState<DateTime>(DateTime.local())

  React.useEffect(() => {
    const now = DateTime.local().set({ hours: 12, minutes: 0 })
    const startOfYear = now.set({ months: 1, days: 0 })
    const endOfYear = now.set({ months: 12, days: 31 })

    let active = true

    void (async function main() {
      while (active) {
        const iter = rangeByDay(startOfYear, endOfYear)
        while (active) {
          const { value, done } = iter.next()
          if (done) {
            break
          }
          setDate(value)
          await delay(20)
        }
      }
    })()

    return () => {
      active = false
    }
  }, [])

  const dateContext = React.useMemo(() => {
    let de = jdn(date.year, date.month, date.day)
    de += (date.hour - 12) / 24 + date.minute / 1440
    de -= 2451545

    return {
      date,
      de,
    }
  }, [date])

  return (
    <DateContext.Provider value={dateContext}>{children}</DateContext.Provider>
  )
}

export default DateControl
