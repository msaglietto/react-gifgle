import {
  IMAGES_REQUEST,
  IMAGES_REQUEST_RECEIVE,
  IMAGES_REQUEST_FAIL,
  IMAGE_REQUEST,
  IMAGE_REQUEST_RECEIVE,
  IMAGE_REQUEST_FAIL
} from '../actions/images'

export const initialState = {
  data: [],
  page: 0,
  total: 0,
  perPage: 25,
  isLoading: false,
  error: '',
  image: {}
}

export default function images (state = initialState, action = {}) {
  switch (action.type) {
    case IMAGES_REQUEST:
      return {
        ...state,
        data: [],
        isLoading: true,
        error: ''
      }
    case IMAGES_REQUEST_RECEIVE:
      return {
        ...state,
        data: action.payload.images,
        total: action.payload.total,
        page: action.payload.page,
        isLoading: false
      }
    case IMAGES_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    case IMAGE_REQUEST:
      return {
        ...state,
        image: {},
        isLoading: true,
        error: ''
      }
    case IMAGE_REQUEST_RECEIVE:
      return {
        ...state,
        image: action.payload,
        isLoading: false
      }
    case IMAGE_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    default:
      return state
  }
}
