import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DataEntry from '../DataEntry'

Enzyme.configure({ adapter: new Adapter() })

it('renders correctly', () => {
  const wrapper = shallow(<DataEntry />)
  expect(wrapper).toMatchSnapshot()
})
