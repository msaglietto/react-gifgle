import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

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
        <div className='field has-addons'>
          <div className='control has-icons-left is-expanded'>
            <input
              placeholder='Enter a topic to search'
              className='input is-info'
              type='text'
              value={this.state.query}
              onChange={this.handleInputChange}
            />
            <span class='icon is-left'>
              <i class='fa fa-search' />
            </span>
          </div>
          <div class='control'>
            <button className='button is-info' type='submit'>Search</button>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchBar
