import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import SearchBar from '../SearchBar'

import logo from './logo.svg'
import './style.css'

const contextTypes = {
  router: PropTypes.object
}

const handleNewSearch = (context) => (query) => context.router.history.push(`/search/${query}`)

export const Component = (props, context) => (
  <header className='Header'>
    <Link to='/'><img src={logo} className='Header-logo' alt='GIFGLE Logo' /></Link>
    <Link to='/'><h1 className='Header-title'>GIFGLE</h1></Link>
    <div className='Header-SearchBar'>
      <SearchBar onNewSearch={handleNewSearch(context)} />
    </div>
  </header>
)

Component.displayName = 'Header'
Component.contextTypes = contextTypes

export default Component
