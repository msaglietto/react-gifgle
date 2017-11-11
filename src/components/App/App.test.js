/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

it('renders without crashing', () => {
  const props = {
    getImages: () => {},
    images: []
  }
  const wrapper = shallow(<App {...props} />)

  expect(wrapper).toMatchSnapshot()
})
