import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const propTypes = {
  images: PropTypes.array
}

const defaultProps = {
  images: []
}

const handleImageClick = (props, image) => () => props.onImageClick(image)

export const Component = props => {
  const imagesComp = props.images.map((image) => (
    <li key={image.id} onClick={handleImageClick(props, image)}>
      <img src={image.preview} alt={image.title} />
    </li>
  ))

  return (
    <ul className='ImageList'>
      {imagesComp}
    </ul>
  )
}

Component.propTypes = propTypes
Component.defaultProps = defaultProps
Component.displayName = 'ImageList'

export default Component
