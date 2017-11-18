import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import SearchBar from '../SearchBar'

import logo from './logo.svg'
import './styles.css'

const contextTypes = {
  router: PropTypes.object
}

const handleNewSearch = (context) => (query) => context.router.history.push(`/search/${query}`)

export const Component = (props, context) => (
  <nav className='Header navbar is-fixed-top is-black'>
    <div className='navbar-brand'>
      <Link className='navbar-item' to='/'>
        <img src={logo} className='Header-logo' alt='GIFGLE Logo' />
        <h1 className='Header-title'>GIFGLE</h1>
      </Link>
    </div>
    <div className='navbar-item is-expanded'>
      <SearchBar onNewSearch={handleNewSearch(context)} />
    </div>
  </nav>
)

Component.displayName = 'Header'
Component.contextTypes = contextTypes

export default Component
