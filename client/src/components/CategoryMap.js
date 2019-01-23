import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/categoryMap.css'

class CategoryMap extends Component {

    render() {
        return (
            <div className="container">
                {this.props.categories.map(parent => (
                    <div key={`category${parent.id}`} className="catContainer">
                        <h3 key={`parent${parent.id}`} className="category" id={`cat${parent.id}`}>
                            <Link to={`/category/${parent.slug}/${parent.id}`}>{parent.name}</Link>
                        </h3>
                        <div className="subcatContainer">
                            {parent.subcat.map(cat => (
                                <div key={`subcat${parent.id}-${cat.id}`} className="subcat">
                                    <Link to={`/${cat.slug}/${cat.id}`}>{cat.name}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
      categories: appState.categoriesReducer.categories
    }
  }
  
  export default connect(mapStateToProps)(CategoryMap)