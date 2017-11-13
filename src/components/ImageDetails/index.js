import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getImage } from '../../actions/images'

import Main from './Component'

const mapStateToProps = state => ({
  image: state.images.image,
  isLoading: state.images.isLoading,
  error: state.images.error
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getImage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
