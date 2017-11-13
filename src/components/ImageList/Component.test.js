/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { Component } from './Component'

describe('ImageList', () => {
  it('should render a message for empty results', () => {
    const wrapper = shallow(<Component />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a list of components', () => {
    const props = {
      images: [{
        id: 1,
        title: 'Test 1',
        preview: 'test-1.gif'
      }, {
        id: 2,
        title: 'Test 2',
        preview: 'test-2.gif'
      }]
    }
    const wrapper = shallow(<Component {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
