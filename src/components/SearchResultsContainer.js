import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';

class SearchResultsContainer extends Component {

  render() {
    return(
      <div id="image-list">
        { this.props.searchList.map((item) => {
          return <ImageCard item={item} key={item.id}/>
        })}
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    searchList: state.searchList
  }
}

export default connect(mapStateToProps, null)(SearchResultsContainer)
