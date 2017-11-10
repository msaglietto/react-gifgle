import React from 'react'
import PropTypes from 'prop-types'

const handleInputChange = props => event => {
  props.onInputChange(event.target.value)
}

const propTypes = {
  onInputChange: PropTypes.func.isRequired
}

const defaultProps = {

}

export const Component = props => (
  <input placeholder='Enter gif topic' onChange={handleInputChange(props)} />
)

Component.propTypes = propTypes
Component.defaultProps = defaultProps
Component.displayName = 'SearchBar'

export default Component
