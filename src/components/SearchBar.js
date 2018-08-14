import React, { Component } from 'react';
// import imageCard from './imageCard';
import { connect } from 'react-redux';
import { config } from '../config';
import { makeSearch } from '../actions'
const Behance = require('behance-api');
const Be = new Behance(config.API_KEY);

class SearchBar extends Component {

  state = {
      searchTerm: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Be.projects({q: `${this.state.searchTerm}`}, (err, res, data) => {
      if (err) throw err;
      const searchResults = data.projects.map((item) => {
        return {
          id: item.id,
          image: item.covers.original,
          name: item.name,
          color: item.colors,
          owner: item.owners[0].username
        }
      })
      this.props.makeSearch(searchResults);
      // console.log(data)
    });
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value})
  }

  render() {
    return(
    <div id="search-bar">
      <form onSubmit={this.handleSubmit} >
        <input onChange={this.handleChange} type="text" search="search"/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )}

}

const mapDispatchToProps = (dispatch) => {
  return {
    makeSearch: (searchList) => { dispatch(makeSearch(searchList))}
  }
}
export default connect(null, mapDispatchToProps)(SearchBar);
