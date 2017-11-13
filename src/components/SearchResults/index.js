import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getImages } from '../../actions/images'

import Main from './Component'

const mapStateToProps = state => ({
  images: state.images.data,
  page: state.images.page,
  total: state.images.total,
  isLoading: state.images.isLoading,
  error: state.images.error
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getImages
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
