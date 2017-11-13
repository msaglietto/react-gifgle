/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { Component } from './Component'

describe('Header', () => {
  it('should render a message for empty results', () => {
    const wrapper = shallow(<Component />)

    expect(wrapper).toMatchSnapshot()
  })
})
