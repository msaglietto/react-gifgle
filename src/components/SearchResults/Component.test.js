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

  it('should call getImages on mount', () => {
    const props = {
      ...defProps,
      getImages: jest.fn(),
      match: { params: {query: 'test', page: '4'} }
    }
    shallow(<Component {...props} />)

    expect(props.getImages).toHaveBeenCalledWith('test', 4)
  })

  it('should call getImages on new props', () => {
    const props = {
      ...defProps,
      getImages: jest.fn(),
      match: { params: {query: 'test', page: '4'} }
    }
    const wrapper = shallow(<Component {...props} />)

    const nextProps = {
      ...defProps,
      match: { params: {query: 'testo', page: '0'} }
    }
    wrapper.setProps(nextProps)

    expect(props.getImages).toHaveBeenCalledWith('testo', 0)
  })

  it('should not call getImages on same props', () => {
    const props = {
      ...defProps,
      getImages: jest.fn(),
      match: { params: {query: 'test', page: '4'} }
    }
    const wrapper = shallow(<Component {...props} />)

    const nextProps = {
      ...defProps,
      match: { params: {query: 'test', page: '4'} }
    }
    wrapper.setProps(nextProps)

    expect(props.getImages).toHaveBeenCalledTimes(1)
  })

  it('should call history on image click', () => {
    const props = {
      ...defProps,
      match: { params: {query: 'test', page: '4'} },      
      history: { push: jest.fn() }
    }
    const wrapper = shallow(<Component {...props} />)
    wrapper.find('ImageList').prop('onImageClick')({slug: 'slug'})

    expect(props.history.push).toHaveBeenCalledWith('/show/slug')
  })

  it('should call history on page change', () => {
    const props = {
      ...defProps,
      match: { params: {query: 'test', page: '4'} },      
      history: { push: jest.fn() }
    }
    const wrapper = shallow(<Component {...props} />)
    wrapper.find('Pagination').prop('onPageClick')(2)

    expect(props.history.push).toHaveBeenCalledWith('/search/test/2')
  })
})
