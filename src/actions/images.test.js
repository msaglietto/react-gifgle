/* eslint-env jest */
import {
  getImages,
  IMAGES_REQUEST,
  IMAGES_REQUEST_RECEIVE,
  IMAGES_REQUEST_FAIL,
  getImage,
  IMAGE_REQUEST,
  IMAGE_REQUEST_RECEIVE,
  IMAGE_REQUEST_FAIL
} from './images'

describe('Images actions', () => {
  describe('Image list', () => {
    it('should dispatch actions when images are fetch', () => {
      const dispatch = jest.fn()
      const actionFn = getImages('test', 1)
      const exampleResponse = {
        ok: true,
        json: () => ({
          data: [{
            id: 1,
            title: 'TEst',
            slug: 'test',
            images: {
              fixed_height: {url: 'preview'},
              original: {url: 'original'}
            }
          }],
          pagination: {
            total_count: 20,
            offset: 50
          }
        })
      }
      const fetchPromise = Promise.resolve(exampleResponse)

      window.fetch = jest.fn().mockImplementation(() => fetchPromise)
      const promiseRes = actionFn(dispatch)

      expect(dispatch).toHaveBeenCalledWith({type: IMAGES_REQUEST})
      expect(window.fetch).toHaveBeenCalledWith('https://api.giphy.com/v1/gifs/search?q=test&offset=25&api_key=k8bNZGTTkxtQT1JPF0AnM31IALA8pBFV')

      return promiseRes.then(() => {
        expect(dispatch).toHaveBeenLastCalledWith({
          type: IMAGES_REQUEST_RECEIVE,
          payload: {
            images: [{
              id: 1,
              title: 'TEst',
              slug: 'test',
              preview: 'preview',
              original: 'original'
            }],
            total: 20,
            page: 2
          }
        })
        window.fetch.mockRestore()
      })
    })

    it('should dispatch actions when images fetch fails', () => {
      const dispatch = jest.fn()
      const actionFn = getImages('test', 1)
      const exampleResponse = {
        ok: false
      }
      const fetchPromise = Promise.resolve(exampleResponse)

      window.fetch = jest.fn().mockImplementation(() => fetchPromise)
      const promiseRes = actionFn(dispatch)

      expect(dispatch).toHaveBeenCalledWith({type: IMAGES_REQUEST})
      expect(window.fetch).toHaveBeenCalledWith('https://api.giphy.com/v1/gifs/search?q=test&offset=25&api_key=k8bNZGTTkxtQT1JPF0AnM31IALA8pBFV')

      return promiseRes.then(() => {
        expect(dispatch).toHaveBeenLastCalledWith({
          type: IMAGES_REQUEST_FAIL,
          payload: 'Error while fetching the images'
        })
        window.fetch.mockRestore()
      })
    })

    it('should fetch trending if no query is send', () => {
      const dispatch = jest.fn()
      const actionFn = getImages()
      const exampleResponse = {
        ok: true,
        json: () => ({
          data: [{
            id: 1,
            title: 'TEst',
            slug: 'test',
            images: {
              fixed_height: {url: 'preview'},
              original: {url: 'original'}
            }
          }],
          pagination: {
            total_count: 20,
            offset: 50
          }
        })
      }
      const fetchPromise = Promise.resolve(exampleResponse)

      window.fetch = jest.fn().mockImplementation(() => fetchPromise)
      actionFn(dispatch)

      expect(dispatch).toHaveBeenCalledWith({type: IMAGES_REQUEST})
      expect(window.fetch).toHaveBeenCalledWith('https://api.giphy.com/v1/gifs/trending?1=1&api_key=k8bNZGTTkxtQT1JPF0AnM31IALA8pBFV')
      window.fetch.mockRestore()
    })
  })

  describe('Single Image', () => {
    it('should dispatch actions when images are fetch', () => {
      const dispatch = jest.fn()
      const actionFn = getImage('test-1')
      const exampleResponse = {
        ok: true,
        json: () => ({
          data: {
            id: 1,
            title: 'TEst',
            slug: 'test-1',
            images: {
              fixed_height: {url: 'preview'},
              original: {url: 'original'}
            }
          }
        })
      }
      const fetchPromise = Promise.resolve(exampleResponse)

      window.fetch = jest.fn().mockImplementation(() => fetchPromise)
      const promiseRes = actionFn(dispatch)

      expect(dispatch).toHaveBeenCalledWith({type: IMAGE_REQUEST})
      expect(window.fetch).toHaveBeenCalledWith('https://api.giphy.com/v1/gifs/1?1=1&api_key=k8bNZGTTkxtQT1JPF0AnM31IALA8pBFV')

      return promiseRes.then(() => {
        expect(dispatch).toHaveBeenLastCalledWith({
          type: IMAGE_REQUEST_RECEIVE,
          payload: {
            id: 1,
            title: 'TEst',
            slug: 'test-1',
            preview: 'preview',
            original: 'original'
          }
        })
        window.fetch.mockRestore()
      })
    })

    it('should dispatch actions when images fetch fails', () => {
      const dispatch = jest.fn()
      const actionFn = getImage('test-1')
      const exampleResponse = {
        ok: false
      }
      const fetchPromise = Promise.resolve(exampleResponse)

      window.fetch = jest.fn().mockImplementation(() => fetchPromise)
      const promiseRes = actionFn(dispatch)

      expect(dispatch).toHaveBeenCalledWith({type: IMAGE_REQUEST})
      expect(window.fetch).toHaveBeenCalledWith('https://api.giphy.com/v1/gifs/1?1=1&api_key=k8bNZGTTkxtQT1JPF0AnM31IALA8pBFV')

      return promiseRes.then(() => {
        expect(dispatch).toHaveBeenLastCalledWith({
          type: IMAGE_REQUEST_FAIL,
          payload: 'Error while fetching the image'
        })
        window.fetch.mockRestore()
      })
    })
  })
})
