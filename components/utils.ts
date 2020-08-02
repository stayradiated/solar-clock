const int = (a: number) => {
  return a < 0 ? Math.ceil(a) : Math.floor(a)
}

const jdn = (Y: number, M: number, D: number) => {
  return (
    int((1461 * (Y + 4800 + int((M - 14) / 12))) / 4) +
    int((367 * (M - 2 - 12 * int((M - 14) / 12))) / 12) -
    int((3 * int((Y + 4900 + int((M - 14) / 12)) / 100)) / 4) +
    D -
    32075
  )
}

const eccentricAnomaly = (e, M) => {
  const f = (E) => {
    return E - e * Math.sin(E) - M
  }

  const fp = (E) => {
    return 1 - e * Math.cos(E)
  }

  let E = M
  for (let i = 0; i < 20; i++) {
    let oldE = E
    E = E - f(E) / fp(E)
    if (Math.abs(oldE - E) < 0.00000001) {
      break
    }
  }

  return E
}

const trueAnomaly = (e, E) => {
  return 2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2))
}

export { jdn, eccentricAnomaly, trueAnomaly }
