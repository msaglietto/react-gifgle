import { connect } from 'react-redux'

import App from './App'

function mapStateToProps (state) {
  return {
    images: state.images.data
  }
}

export default connect(mapStateToProps)(App)
