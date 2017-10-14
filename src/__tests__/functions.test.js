import * as subject from '../functions'

describe('inssCalc', () => {
  it('returns the correct value', () => {
    expect(subject.inssCalc(1000)).toBe(80)
    expect(subject.inssCalc(2000)).toBe(180)
    expect(subject.inssCalc(5000)).toBe(550)
    expect(subject.inssCalc(10000)).toBeCloseTo(608.44, 2)
  })
})

describe('irrfCalc', () => {
  it('returns the correct value', () => {
    expect(subject.irrfCalc(1000)).toBe(0)
    expect(subject.irrfCalc(2000)).toBeCloseTo(7.20, 2)
    expect(subject.irrfCalc(3000)).toBeCloseTo(95.2, 2)
    expect(subject.irrfCalc(4000)).toBeCloseTo(263.87, 2)
    expect(subject.irrfCalc(10000)).toBeCloseTo(1880.64, 2)
  })
})

describe('transport', () => {
  it('returns the correct value', () => {
    expect(subject.transport(1000)).toBe(60)
    expect(subject.transport(2000)).toBe(120)
    expect(subject.transport(5000)).toBe(178.2)
  })
})

describe('netSalary', () => {
  it('returns the correct value', () => {
    expect(subject.netSalary(1000)).toBe(920)
    expect(subject.netSalary(2000)).toBe(1820)
    expect(subject.netSalary(5000)).toBeCloseTo(4084.88, 0)
    expect(subject.netSalary(10000)).toBeCloseTo(7678, 0)
  })
})

describe('employeeYearlyEarnings', () => {
  it('returns the correct value', () => {
    expect(subject.employeeYearlyEarnings(1000)).toBe("12,236")
    expect(subject.employeeYearlyEarnings(2000)).toBe("24,171.35")
    expect(subject.employeeYearlyEarnings(5000)).toBe("54,159.3")
    expect(subject.employeeYearlyEarnings(10000)).toBe("101,992.09")
  })
})

describe('employeeResults', () => {
  it('returns the correct value', () => {
    [1000, 2000, 5000, 10000].map((value) => {
      expect(subject.employeeResults(value)).toMatchSnapshot()
    })
  })
})

describe('companyYearlyEarnings', () => {
  it('returns the correct value', () => {
    [1000, 2000, 5000, 10000].map((value) => {
      expect(subject.companyYearlyEarnings(value)).toMatchSnapshot()
    })
  })
})

describe('companyResults', () => {
  it('returns the correct value', () => {
    [1000, 2000, 5000, 10000].map((value) => {
      expect(subject.companyResults(value)).toMatchSnapshot()
    })
  })
})

describe('translate', () => {
  it('returns the translated strings', () => {
    expect(subject.translate('employee')).toEqual('CLT')
    expect(subject.translate('company')).toEqual('PJ')
    expect(subject.translate('yearly')).toEqual('Em um ano, você recebe:')
    expect(subject.translate('fgts')).toEqual('FGTS acumulado:')
    expect(subject.translate('foo')).toEqual('foo')
  })
})

describe('omit', () => {
  it('returns an empty object without argument', () => {
    expect(subject.omit()).toEqual({})
  })

  it('returns the object without the key to omit', () => {
    const obj = { foo: 'bar', baz: 12 }
    expect(subject.omit(obj, 'foo')).toEqual({ baz: 12 })
  })
})
