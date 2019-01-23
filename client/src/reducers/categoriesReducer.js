const initialState = {
  categories: [],
  listings: [],
  currentListing: {},
  currentCategory: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    // add actions here
    case 'GET_CATEGORIES':
      return {...state, categories: action.payload}
    case 'GET_LISTINGS_ONE_CAT':
      return {...state, listings: action.payload.data}
    case 'GET_SINGLE_LISTING':
      return {...state, currentListing: action.payload.listing}
    case 'GET_ALL_IN_CATEGORY':
      return {...state, currentCategory: action.payload}
    default:
      return state
  }
}