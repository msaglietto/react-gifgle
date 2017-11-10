/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { Component } from './Component'

describe('SearchBar', () => {
  it('should render a message for empty results', () => {
    const wrapper = shallow(<Component />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a list of components', () => {
    const props = {
      images: [{
        id: 1,
        images: {
          fixed_height_small: {url: 'test-1'}
        }
      }, {
        id: 2,
        images: {
          fixed_height_small: {url: 'test-2'}
        }
      }]
    }
    const wrapper = shallow(<Component {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
