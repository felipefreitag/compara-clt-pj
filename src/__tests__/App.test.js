import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
//import Enzyme, { shallow } from 'enzyme'
//import Adapter from 'enzyme-adapter-react-16'
import { employeeResults, companyResults } from '../functions'
import App from '../App'

jest.mock('../functions', () => {
  employeeResults: jest.fn(() => ({
    name: 'employee',
    yearly: 1000.0,
    fgts: 20.0,
  }))

  companyResults: jest.fn(() => ({
    name: 'employee',
    yearly: 2000.0,
  }))
})

//Enzyme.configure({ adapter: new Adapter() })

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

// describe('calculate', () => {
//   it('stores the results in the state', () => {
//     const wrapper = shallow(<App />)
//     wrapper.instance().calculate()
//     expect(employeeResults).toHaveBeenCalled()
//     expect(companyResults).toHaveBeenCalled()
//   })
// })
