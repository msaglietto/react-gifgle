import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

class Component extends React.Component {
  static displayName = 'ImageDetails'

  static propTypes = {
    getImage: PropTypes.func.isRequired,
    image: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
  }

  componentWillMount () {
    const { slug } = this.props.match.params
    this.props.getImage(slug)
  }

  componentWillReceiveProps (nextProps) {
    const params = this.props.match
    const { slug } = nextProps.match
    if (params.slug !== slug) {
      this.props.getImage(slug)
    }
  }

  render () {
    const { image, isLoading, error } = this.props

    if (isLoading) {
      return 'Loading ...'
    }

    if (error) {
      return 'Sorry it has been an error while fetching the image'
    }

    return (
      <div className='ImageDetails'>
        <h2>{image.title}</h2>
        <img src={image.original} alt={image.title} />
      </div>
    )
  }
}

export default Component
