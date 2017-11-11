/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import Component from './Component'

describe('SearchBar', () => {
  const defProps = {
    onNewSearch: () => {}
  }

  it('should render equal to the snapshot', () => {
    const wrapper = shallow(<Component {...defProps} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should update state on input change', () => {
    const wrapper = shallow(<Component {...defProps} />)
    wrapper.find('input').simulate('change', {target: {value: 'test'}})

    expect(wrapper.state('query')).toEqual('test')
  })

  it('should call prop on submit', () => {
    const props = {
      onNewSearch: jest.fn()
    }
    const wrapper = shallow(<Component {...props} />)
    wrapper.find('input').simulate('change', {target: {value: 'test'}})
    wrapper.simulate('submit', {preventDefault: () => {}})

    expect(props.onNewSearch).toHaveBeenCalledWith('test')
  })
})
