import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { employeeResults, companyResults } from '../functions'
import App from '../App'

jest.mock('../functions')

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(
      <App />
    ).toJSON()
    expect(tree).toMatchSnapshot()
})

describe('calculate', () => {
  const initialState = {
    showResult: false,
    employeeMonthly: 0,
    companyMonthly:  0,
    employeeYearly: 0,
    companyYearly: 0,
    employeeResults: {},
    companyResults: {},
  }
  it('calls the correct functions', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.instance().state).toEqual(initialState)
    wrapper.instance().calculate()
    expect(employeeResults).toHaveBeenCalled()
    expect(companyResults).toHaveBeenCalled()
    expect(wrapper.instance().state.showResult).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
