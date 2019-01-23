import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import store from '../store'

import Home from './Home'
import ParentCategory from './ParentCategory'
import SingleCategory from './SingleCategory'
import SingleListing from './SingleListing'
import PostListing from './PostListing'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/category/:slug/:id" exact component={ParentCategory} />
            <Route path="/:category/:id" exact component={SingleCategory} />
            <Route path="/:category/:catId/indiv/:listId" exact component={SingleListing} />
            <Route path="/add-listing" exact component={PostListing}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
