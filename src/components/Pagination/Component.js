import React from 'react'
import PropTypes from 'prop-types'

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

const button = (props, page, label, currentPage) => (
  <li key={label}>
    <a className={`pagination-link ${page === currentPage ? 'is-current' : ''}`} onClick={handePageClick(props, page)}> {label} </a>
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
    <nav class='Pagination pagination is-centered' role='navigation' aria-label='pagination'>
      <a class='pagination-previous' onClick={handePageClick(props, Math.max(props.currentPage - 1, 0))}>Previous</a>
      <a class='pagination-next' onClick={handePageClick(props, Math.min(props.currentPage + 1, maxPages - 1))}>Next page</a>
      <ul className='pagination-list'>
        {Array.apply(null, Array(range)).map((_, i) => {
          const atPage = i + showFromPage
          return button(props, atPage, atPage + 1, props.currentPage)
        })}
      </ul>
    </nav>
  )
}

Component.propTypes = propTypes
Component.defaultProps = defaultProps
Component.displayName = 'Pagination'

export default Component
