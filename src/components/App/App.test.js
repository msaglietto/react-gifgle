/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

it('renders without crashing', () => {
  const props = {
    getImages: () => {},
    images: [],
    page: 0,
    total: 10
  }
  const wrapper = shallow(<App {...props} />)

  expect(wrapper).toMatchSnapshot()
})
