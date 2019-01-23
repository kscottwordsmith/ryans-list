import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllInCategory } from '../actions/categories'

let categoryMap = []

class CategoryBroad extends Component {
    componentDidMount() {
        getAllInCategory(this.props.match.params.id)
    }

    render() {
        categoryMap = this.props.currentCategory

        return (
            <div>
                <h1>{this.props.match.params.slug}</h1>
                {categoryMap.map(listing => {
                    return (
                        <div key={`listing${listing.id}`} className="multiListingContainer">
                            <img src={listing.cover_photo} alt={`listing ${listing.id}`} className="multiListingCover"/>
                            <span className="multiListingName">
                                <Link to={`/${listing.slug}/${listing.category_id}/indiv/${listing.id}`}>{listing.listing_name}</Link>
                            </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
      currentCategory: appState.categoriesReducer.currentCategory
    }
  }
  
  export default connect(mapStateToProps)(CategoryBroad)