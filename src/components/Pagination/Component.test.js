/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import Component from './Component'

describe('Pagination', () => {
  const defProps = {
    currentPage: 0,
    perPage: 10,
    totalItems: 100,
    pagesToShow: 5,
    onPageClick: () => {}
  }

  it('should render equal to the snapshot', () => {
    const wrapper = shallow(<Component {...defProps} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should not render anything if no items', () => {
    const props = {
      ...defProps,
      totalItems: 0
    }
    const wrapper = shallow(<Component {...props} />)

    expect(wrapper.find('li')).toHaveLength(0)
  })

  it('should render pagestToShow elements', () => {
    const wrapper = shallow(<Component {...defProps} />)

    expect(wrapper.find('li')).toHaveLength(5)
  })

  it('should render just pages to fill the total items', () => {
    const props = {
      ...defProps,
      totalItems: 20
    }
    const wrapper = shallow(<Component {...props} />)

    expect(wrapper.find('li')).toHaveLength(2)
  })

  it('should skip pages if there are more than pagesToShow and currentPage is big', () => {
    const props = {
      ...defProps,
      currentPage: 4
    }
    const wrapper = shallow(<Component {...props} />)

    expect(wrapper.find('li').at(0).text().trim()).toEqual('3')
  })

  it('should skip pages if there are more than pagesToShow and currentPage is big', () => {
    const props = {
      ...defProps,
      currentPage: 9
    }
    const wrapper = shallow(<Component {...props} />)

    expect(wrapper.find('li').at(4).text().trim()).toEqual('10')
  })

  it('should report page click on onPageClick', () => {
    const props = {
      ...defProps,
      currentPage: 4,
      onPageClick: jest.fn()
    }
    const wrapper = shallow(<Component {...props} />)

    // Prev
    wrapper.find('a').at(0).simulate('click')
    expect(props.onPageClick).toHaveBeenCalledWith(3)

    // First num
    wrapper.find('li').at(0).find('a').simulate('click')
    expect(props.onPageClick).toHaveBeenCalledWith(2)

    // Last num
    wrapper.find('li').at(4).find('a').simulate('click')
    expect(props.onPageClick).toHaveBeenCalledWith(6)

    // Next
    wrapper.find('a').at(1).simulate('click')
    expect(props.onPageClick).toHaveBeenCalledWith(5)
  })
})
