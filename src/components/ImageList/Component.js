import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  images: PropTypes.array
}

const defaultProps = {
  images: []
}

export const Component = props => {
  const imagesComp = props.images.map((image) => <img key={image.id} src={image.images.fixed_height_small.url} alt={image.title} />)

  return (
    <div className='ImageList'>
      {imagesComp}
    </div>
  )
}

Component.propTypes = propTypes
Component.defaultProps = defaultProps
Component.displayName = 'ImageList'

export default Component
