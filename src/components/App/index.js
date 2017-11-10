import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getImages } from '../../actions/images'

import App from './App'

const mapStateToProps = state => ({
  images: state.images.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getImages
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
