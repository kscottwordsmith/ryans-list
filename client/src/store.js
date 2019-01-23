import { createStore, combineReducers } from 'redux'

import categoriesReducer from './reducers/categoriesReducer'
// import all reducers here

const rootReducer = combineReducers({
  categoriesReducer
  // put reducers here
})

const store = createStore(rootReducer)

export default store