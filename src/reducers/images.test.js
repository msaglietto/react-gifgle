/* eslint-env jest */
import images, { initialState } from './images'
import {
  IMAGES_REQUEST,
  IMAGES_REQUEST_RECEIVE,
  IMAGES_REQUEST_FAIL,
  IMAGE_REQUEST,
  IMAGE_REQUEST_RECEIVE,
  IMAGE_REQUEST_FAIL
} from '../actions/images'

describe('Images Reducer', () => {
  it('should return an initial state', () => {
    expect(images()).toBe(initialState)
  })

  describe('Images Request', () => {
    it('should update state for IMAGES_REQUEST', () => {
      const initState = {
        data: [1, 2],
        isLoading: false,
        error: 'Yes'
      }
      const state = images(initState, {type: IMAGES_REQUEST})

      expect(state.data).toHaveLength(0)
      expect(state.isLoading).toBeTruthy()
      expect(state.error).toBeFalsy()
    })

    it('should update state for IMAGES_REQUEST_RECEIVE', () => {
      const payload = {
        images: [1, 2, 3],
        total: 3,
        page: 1
      }
      const state = images(initialState, {type: IMAGES_REQUEST_RECEIVE, payload})

      expect(state.data).toBe(payload.images)
      expect(state.total).toBe(payload.total)
      expect(state.page).toBe(payload.page)
      expect(state.isLoading).toBeFalsy()
    })

    it('should update state for IMAGES_REQUEST_FAIL', () => {
      const payload = 'Error'
      const state = images(initialState, {type: IMAGES_REQUEST_FAIL, payload})

      expect(state.error).toBe(payload)
      expect(state.isLoading).toBeFalsy()
    })
  })

  describe('Image Request', () => {
    it('should update state for IMAGE_REQUEST', () => {
      const initState = {
        image: {something: ''},
        isLoading: false,
        error: 'Yes'
      }
      const state = images(initState, {type: IMAGE_REQUEST})

      expect(state.image).toEqual({})
      expect(state.isLoading).toBeTruthy()
      expect(state.error).toBeFalsy()
    })

    it('should update state for IMAGE_REQUEST_RECEIVE', () => {
      const payload = {something: ''}
      const state = images(initialState, {type: IMAGE_REQUEST_RECEIVE, payload})

      expect(state.image).toBe(payload)
      expect(state.isLoading).toBeFalsy()
    })

    it('should update state for IMAGE_REQUEST_FAIL', () => {
      const payload = 'Error'
      const state = images(initialState, {type: IMAGE_REQUEST_FAIL, payload})

      expect(state.error).toBe(payload)
      expect(state.isLoading).toBeFalsy()
    })
  })
})
