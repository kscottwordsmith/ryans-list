import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../actions/categories'
import CategoryMap from './CategoryMap'
import '../styles/Home.css'

class Home extends Component {
  componentDidMount() {
    getCategories()
  }
  
  render() {
    return (
      <div id="homeContainer">
        <div id="addListContainer">
          <h3 id="addListingHead">ryans list</h3>
          <div id="belowListHead">
            <Link to={`/add-listing`}>Add Listing</Link>
          </div>
        </div>
        <div><CategoryMap /></div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    categories: appState.categoriesReducer.categories
  }
}

export default connect(mapStateToProps)(Home)