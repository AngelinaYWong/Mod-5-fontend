import React, { Component } from 'react';
// import imageCard from './imageCard';
// import { connect } from 'react-redux';
import { config } from '../config';
const Behance = require('behance-api');
const Be = new Behance(config.API_KEY);

class SearchBar extends Component {

  state = {
      searchTerm: '',
      foundItems: [],
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Be.projects({q: `${this.state.searchTerm}`}, function (err, res, data) {
      if (err) throw err;
      console.log(data);
    });
  }
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value})
  }

  render() {
    return(
    <div>
      <form onSubmit={this.handleSubmit} >
        <input onChange={this.handleChange} type="text" search="search"/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
  }
}

export default SearchBar
