export const IMAGES_REQUEST = 'IMAGES_REQUEST'
export const IMAGES_REQUEST_RECEIVE = 'IMAGES_REQUEST_RECEIVE'
export const IMAGES_REQUEST_FAIL = 'IMAGES_REQUEST_FAIL'

export const IMAGE_REQUEST = 'IMAGE_REQUEST'
export const IMAGE_REQUEST_RECEIVE = 'IMAGE_REQUEST_RECEIVE'
export const IMAGE_REQUEST_FAIL = 'IMAGE_REQUEST_FAIL'

const API_SEARCH_URL = 'http://api.giphy.com/v1/gifs/search?q='
const API_SINGLE_URL = 'http://api.giphy.com/v1/gifs/'
const API_TREND_URL = 'http://api.giphy.com/v1/gifs/trending?1=1'
const API_KEY = '&api_key=k8bNZGTTkxtQT1JPF0AnM31IALA8pBFV'

const giphyToImage = (giphy) => ({
  id: giphy.id,
  title: giphy.title,
  preview: giphy.images.fixed_height_small.url,
  original: giphy.images.original.url,
  slug: giphy.slug
})
const giphyAPIPerpage = 25

export function getImages (query, page = 0) {
  return (dispatch) => {
    dispatch({ type: IMAGES_REQUEST })
    const url = query ? `${API_SEARCH_URL}${query}&offset=${page * giphyAPIPerpage}` : API_TREND_URL
    window.fetch(`${url}${API_KEY}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Image data fail')
      })
      .then(resData => {
        const images = (resData.data || []).map(giphyToImage)
        dispatch({
          type: IMAGES_REQUEST_RECEIVE,
          payload: {
            images,
            total: resData.pagination.total_count || resData.pagination.count,
            page: resData.pagination.offset / giphyAPIPerpage
          }
        })
      })
      .catch(ex => dispatch({ type: IMAGES_REQUEST_FAIL, payload: ex.toString() }))
  }
}

const slugToId = slug => slug.substr(slug.lastIndexOf('-') + 1)

export function getImage (slug) {
  return (dispatch) => {
    dispatch({ type: IMAGE_REQUEST })
    const url = `${API_SINGLE_URL}${slugToId(slug)}?1=1`
    window.fetch(`${url}${API_KEY}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Image data fail')
      })
      .then(resData => {
        dispatch({
          type: IMAGE_REQUEST_RECEIVE,
          payload: giphyToImage(resData.data)
        })
      })
      .catch(ex => dispatch({ type: IMAGE_REQUEST_FAIL, payload: ex.toString() }))
  }
}
