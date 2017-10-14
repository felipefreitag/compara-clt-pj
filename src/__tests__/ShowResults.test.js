import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ShowResults from '../ShowResults'

Enzyme.configure({ adapter: new Adapter() })

it('renders correctly', () => {
  const wrapper = shallow(<ShowResults />)
  expect(wrapper).toMatchSnapshot()
})
