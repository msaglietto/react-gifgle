import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from '../Header'
import SearchResults from '../SearchResults'
import ImageDetails from '../ImageDetails'

import './App.css'

class App extends Component {
  static displayName = 'App'

  render () {
    return (
      <Router>
        <div className='App'>
          <Header />

          <Route exact path='/' component={SearchResults} />
          <Route path='/search/:query/:page?' component={SearchResults} />
          <Route path='/:slug' component={ImageDetails} />
        </div>
      </Router>
    )
  }
}

export default App
