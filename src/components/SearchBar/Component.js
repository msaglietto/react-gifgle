import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css'

class SearchBar extends Component {
  static displayName = 'SearchBar'

  static propTypes = {
    onNewSearch: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  handleInputChange = event => {
    this.setState({query: event.target.value})
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.props.onNewSearch(this.state.query)
  }

  render () {
    return (
      <form onSubmit={this.handleFormSubmit} className='SearchBar'>
        <input type='text' value={this.state.query} onChange={this.handleInputChange} />
        <button type='submit'>Search</button>
      </form>
    )
  }
}

export default SearchBar
