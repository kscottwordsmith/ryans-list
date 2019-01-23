import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function getCategories() {
  axios.get('/categories').then(resp => {
    store.dispatch({
      type: 'GET_CATEGORIES', 
      payload: resp.data.categories
    })
  })
}

export function getAllInCategory(catId) {
  axios.get(`categories/all/?catId=${catId}`).then (resp => {
    store.dispatch({
      type: 'GET_ALL_IN_CATEGORY',
      payload: resp.data.data
    })
  })
}

export function getSingleCategory(catId) {
  axios.get(`/listings/?catId=${catId}`).then(resp => {
    store.dispatch({
      type: 'GET_LISTINGS_ONE_CAT',
      payload: resp.data
    })
  })
}

export function getSingleListing(id) {
  axios.get(`/listings/single/?id=${id}`).then(resp => {
    store.dispatch({
      type: 'GET_SINGLE_LISTING',
      payload: resp.data
    })
  })
}