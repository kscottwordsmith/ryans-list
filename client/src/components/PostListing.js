import React, { Component, Fragment } from 'react'
import { postListing } from '../actions/posting'
import { getCategories } from '../actions/categories'
import { connect } from  'react-redux'
import '../styles/postListing.css'

class PostListing extends Component {
    state = {
        listingName: "",
        cityId: 1,
        text: "",
        categoryId: 0,
        coverPhoto: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        postListing(this.state)
        this.setState({
            listingName: "",
            cityId: 1,
            text: "",
            categoryId: 0,
            coverPhoto: ""
        })
        this.props.history.goBack()
    }

    componentDidMount() {
        getCategories()
    }

    render(){
        var selectArray = []
        this.props.categories.forEach(parent => {
            parent.subcat.forEach(cat => (
                selectArray.push(<option value={`${cat.id}`} key={`selectcat${cat.id}`}>{cat.name}</option>)
            ))
        })
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit} autoComplete="off" id="inputform">
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.listingName}
                        placeholder="listing name"
                        name="listingName"
                        id="nameInput"
                    />
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.text}
                        placeholder="listing text"
                        cols="50"
                        name="text"
                    />
                    <select onChange={this.handleChange} name="categoryId" defaultValue="" required id="catIdSelect">
                        <option value="" disabled hidden>Choose category</option>
                        {selectArray}
                    </select>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.coverPhoto}
                        placeholder="http://placehold.it/75x75"
                        name="coverPhoto"
                    />
                    <button onClick={this.handleSubmit} id="listButton">Submit</button>
                </form>
            </Fragment>
        )
    }
}

function mapStateToProps(appState) {
    return {
        categories: appState.categoriesReducer.categories
    }
}

export default connect(mapStateToProps)(PostListing)