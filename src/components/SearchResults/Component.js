import React from 'react'
import PropTypes from 'prop-types'

import ImageList from '../ImageList'
import Pagination from '../Pagination'

class Component extends React.Component {
  static displayName = 'SearchResults'

  static propTypes = {
    getImages: PropTypes.func.isRequired,
    images: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    match: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
  }

  componentWillMount () {
    const { query, page } = this.props.match.params
    this.props.getImages(query, parseInt(page || 0, 10))
  }

  componentWillReceiveProps (nexProps) {
    const { params } = this.props.match
    const { query, page } = nexProps.match.params
    if (query !== params.query || page !== params.page) {
      this.props.getImages(query, parseInt(page, 10))
    }
  }

  handlePageChange = (page) => {
    const { query } = this.props.match.params
    this.props.history.push(`/search/${query}/${page}`)
  }

  handleImageClick = (image) => {
    this.props.history.push(`/show/${image.slug}`)
  }

  render () {
    const { isLoading, error } = this.props

    if (isLoading) {
      return 'Loading ...'
    }

    if (error) {
      return 'Sorry it has been an error while fetching the image'
    }

    return (
      <section className='SearchReults section'>
        <div class='message is-info' style={{'marginTop': 10}}>
          <h2 className='message-body'>You are seeing the results of {this.props.match.params.query || 'trending'} Gifts</h2>
        </div>

        <ImageList images={this.props.images} onImageClick={this.handleImageClick} />

        <div className='SearchResults-pagination' style={{'marginTop': 10}}>
          <Pagination
            currentPage={this.props.page}
            totalItems={this.props.total}
            onPageClick={this.handlePageChange}
          />
        </div>
      </section>
    )
  }
}

export default Component
