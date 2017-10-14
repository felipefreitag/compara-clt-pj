import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ResultsTable from '../ResultsTable'

Enzyme.configure({ adapter: new Adapter() })

it('renders correctly', () => {
  const wrapper = shallow(<ResultsTable toShow={{ foo: 'bar' }}/>)
  expect(wrapper).toMatchSnapshot()
})
