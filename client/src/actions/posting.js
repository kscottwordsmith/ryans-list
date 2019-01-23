import axios from 'axios'

axios.defaults.baseURL = '/api'

export function postListing(list) {
    axios.post('/listings', {
        listingName: list.listingName,
        cityId: list.cityId,
        text: list.text,
        categoryId: list.categoryId,
        coverPhoto: list.coverPhoto
    }).then(resp => {
        console.log('posting', resp)
    })
}