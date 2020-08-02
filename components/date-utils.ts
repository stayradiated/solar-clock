import { DateTime } from 'luxon'

function* rangeByDay(
  from: DateTime,
  to: DateTime,
): Generator<DateTime, void, void> {
  let now = from
  while (now.valueOf() < to.valueOf()) {
    now = now.plus({ days: 1 })
    yield now
  }
}

export { rangeByDay }
