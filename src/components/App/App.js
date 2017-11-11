import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SearchBar from '../SearchBar'
import ImageList from '../ImageList'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  static displayName = 'App'

  static propTypes = {
    images: PropTypes.array.isRequired
  }

  state = {
    query: '',
    offset: 0,
    page: 1
  }

  componentWillMount () {
    this.props.getImages()
  }

  handleNewSearch = (query) => {
    this.props.getImages(query)
    this.setState({ query })
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Gifgle</h1>
          <div className='App-SearchBar'>
            <SearchBar onNewSearch={this.handleNewSearch} />
          </div>
        </header>
        <h2>
          You are seeing the results of {this.state.query || 'trending gif'}
        </h2>
        <ImageList images={this.props.images} />
      </div>
    )
  }
}

export default App
