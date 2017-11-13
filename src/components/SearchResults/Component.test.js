/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import Component from './Component'

describe('SearchResults', () => {
  const defProps = {
    getImages: () => {},
    images: [],
    page: 0,
    total: 10,
    match: { params: {} },
    isLoading: false,
    error: ''
  }

  it('should render equal to the snapshot', () => {
    const wrapper = shallow(<Component {...defProps} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should show when its loading', () => {
    const props = {
      ...defProps,
      isLoading: true
    }
    const wrapper = shallow(<Component {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should show when there is an error', () => {
    const props = {
      ...defProps,
      error: 'THer was an error'
    }
    const wrapper = shallow(<Component {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
