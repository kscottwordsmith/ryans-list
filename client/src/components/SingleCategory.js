import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSingleCategory } from '../actions/categories'
import { Link } from 'react-router-dom'
import '../styles/singleCategory.css'

var listingMap = []

class SingleCategory extends Component {

    componentDidMount() {
        getSingleCategory(this.props.match.params.id)
    }
    
    render() {
        listingMap = this.props.listings.map(listing => {
            return (
                <div key={`listing${listing.id}`} className="multiListingContainer">
                    <img src={listing.cover_photo} alt={`listing ${listing.id}`} className="multiListingCover"/>
                    <span className="multiListingName">
                        <Link to={`/${this.props.match.params.category}/${this.props.match.params.id}/indiv/${listing.id}`}>{listing.listing_name}</Link>
                    </span>
                </div>
            )
        })
        return (
            <div>
                <h1 id="singleCatTitle">{this.props.match.params.category}</h1>
                {listingMap}
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
      listings: appState.categoriesReducer.listings
    }
  }
  
export default connect(mapStateToProps)(SingleCategory)