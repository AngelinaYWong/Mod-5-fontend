import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import SearchBar from './SearchBar';
import { Image } from 'semantic-ui-react';
import Dimmer from './Dimmer';
// import Lightbox from 'react-images';

class SearchResultsContainer extends Component {
  state = {
    clickedPhoto: '',
  }

  handleClick = (e) => {
    this.setState({ clickedPhoto: e.target.id })
  }

  closeImage = (e) => {
    if (this.state.clickedPhoto === e.target.id) {
      this.setState({ clickedPhoto: '' })
    }
  }

  render() {

    return(
      <Fragment>

          <SearchBar />

          {this.state.clickedPhoto !== '' ? <Image src={this.state.clickedPhoto} id={this.state.clickedPhoto} size='huge' onClick={ (e)=>this.closeImage(e) } /> : null}

          { this.state.clickedPhoto !== '' ? <Dimmer/> : null }


          <div id="image-list">
            { this.props.searchList.map((images) => {
              return <ImageCard images={images}
              key={images.id}
              handleClick={this.handleClick}
            />})}
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
