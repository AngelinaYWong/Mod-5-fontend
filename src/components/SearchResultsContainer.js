import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResultsContainer extends Component {

  render() {
    
  }
}

const mapStateToProps = (state) => {
  return {
    searchList: state.searchList
  }
}

export default connect(mapStateToProps, null)(SearchResultsContainer)
