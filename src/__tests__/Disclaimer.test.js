import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Disclaimer from '../Disclaimer'

Enzyme.configure({ adapter: new Adapter() })

it('renders correctly', () => {
  const wrapper = shallow(<Disclaimer />)
  expect(wrapper).toMatchSnapshot()
})
