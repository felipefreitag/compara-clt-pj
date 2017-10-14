import React from 'react'
import renderer from 'react-test-renderer'
import Disclaimer from '../Disclaimer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it('renders correctly', () => {
  const wrapper = shallow(<Disclaimer />)
  expect(wrapper).toMatchSnapshot()
})
