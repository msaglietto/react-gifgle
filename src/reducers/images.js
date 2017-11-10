import { IMAGES_REQUEST, IMAGES_REQUEST_RECEIVE, IMAGES_REQUEST_FAIL } from '../actions/images'

const initialState = {
  data: [],
  isLoading: false
}

export default function images (state = initialState, action) {
  switch (action.type) {
    case IMAGES_REQUEST:
      return {
        ...state,
        data: [],
        isLoading: true
      }
    case IMAGES_REQUEST_RECEIVE:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }
    case IMAGES_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}
