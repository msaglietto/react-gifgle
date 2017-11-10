/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { Component } from './Component'

describe('SearchBar', () => {
  it('should render equal to the snapshot', () => {
    const props = {
      onInputChange: () => {}
    }
    const wrapper = shallow(<Component {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should call prop on change', () => {
    const props = {
      onInputChange: jest.fn()
    }
    const wrapper = shallow(<Component {...props} />)
    wrapper.find('input').simulate('change', {target: {value: 'test'}})

    expect(props.onInputChange).toHaveBeenCalledWith('test')
  })
})
