import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSingleListing } from '../actions/categories'

var indvListing = {}

class SingleListing extends Component {
    componentDidMount() {
        getSingleListing(this.props.match.params.listId)
    }

    render() {
        indvListing = this.props.currentListing
        return (
            <div id="singleListContainer">
                <img src={indvListing.cover_photo} alt={`${indvListing.listing_name} thumbnail`} id="singleListPhoto"/>
                <h2 id="singleListName">{indvListing.listing_name}</h2>
                <div id="singleListText">{indvListing.text}</div>
            </div>
            
        )
    }
}

function mapStateToProps(appState) {
    return {
      currentListing: appState.categoriesReducer.currentListing
    }
  }
  
export default connect(mapStateToProps)(SingleListing)