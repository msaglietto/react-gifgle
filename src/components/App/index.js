import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getImages } from '../../actions/images'

import App from './App'

const mapStateToProps = state => ({
  images: state.images.data,
  page: state.images.page,
  total: state.images.total
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getImages
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
