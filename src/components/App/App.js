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

  componentWillMount () {
    this.props.getImages()
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Gifgle</h1>
          <div className='App-SearchBar'>
            <SearchBar onInputChange={console.log} />
          </div>
        </header>
        <ImageList images={this.props.images} />
      </div>
    )
  }
}

export default App
