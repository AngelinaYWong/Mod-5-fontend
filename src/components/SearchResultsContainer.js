import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import SearchBar from './SearchBar';
// import Lightbox from 'react-images';

class SearchResultsContainer extends Component {


  render() {
    return(
      <Fragment>
        <SearchBar />

        <div id="image-list">
          { this.props.searchList.map((images) => {
            return <ImageCard images={images} key={images.id}/>
          })}
        </div>
    </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchList: state.searchList
  }
}

export default connect(mapStateToProps, null)(SearchResultsContainer)
