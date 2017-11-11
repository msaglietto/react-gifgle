import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const propTypes = {
  currentPage: PropTypes.number,
  perPage: PropTypes.number,
  totalItems: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
  pagesToShow: PropTypes.number
}

const defaultProps = {
  currentPage: 0,
  perPage: 25,
  pagesToShow: 10
}

const handePageClick = (props, page) => () => props.onPageClick(page)

const button = (props, page, label) => (
  <li key={label}>
    <button onClick={handePageClick(props, page)}> {label} </button>
  </li>
)

const Component = props => {
  if (!props.totalItems) {
    return null
  }

  const maxPages = Math.ceil(props.totalItems / props.perPage)
  const range = Math.min(maxPages, props.pagesToShow)
  const midPoint = props.currentPage - Math.floor(props.pagesToShow / 2)
  const showFromPage = Math.max(
    0,
    Math.min(maxPages - props.pagesToShow, Math.max(0, midPoint))
  )

  return (
    <ul className='Pagination'>
      {button(props, 0, '<<')}
      {button(props, Math.max(props.currentPage - 1, 0), '<')}
      {Array.apply(null, Array(range)).map((_, i) => {
        const atPage = i + showFromPage
        return (atPage === props.currentPage
          ? <li key={atPage + 1}>{atPage + 1}</li>
          : button(props, atPage, atPage + 1)
        )
      })}
      {button(props, Math.min(props.currentPage + 1, maxPages - 1), '>')}
      {button(props, maxPages - 1, '>>')}
    </ul>
  )
}

Component.propTypes = propTypes
Component.defaultProps = defaultProps
Component.displayName = 'Pagination'

export default Component
