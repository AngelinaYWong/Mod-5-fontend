import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
// import Lightbox from 'react-images';

class SearchResultsContainer extends Component {


  render() {
    return(
      <div id="image-list">
        { this.props.searchList.map((images) => {
          return <ImageCard images={images} key={images.id}/>
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
