import { inssCalc } from '../functions'

describe('inssCalc', () => {
  it('runs', () => {
    expect(inssCalc(1000)).toBeLessThan(1000)
  })
})
