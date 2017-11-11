import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const propTypes = {
  images: PropTypes.array
}

const defaultProps = {
  images: []
}

export const Component = props => {
  const imagesComp = props.images.map((image) => <li key={image.id}><img src={image.preview} alt={image.title} /></li>)

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
