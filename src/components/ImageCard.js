import React, { Component } from 'react';
import '../stylesheets/imagecard.css';
import ImageOverlay from './ImageOverlay'
// import Lightbox from 'react-images';


class ImageCard extends Component {


  handleClick = (e) => {
    e.preventDefault;
    console.log(this.props.images.id)
  }

  render() {

    return(
      <div id="container" className="image-card">

        <ImageOverlay className="overlay" imgId={ this.props.images.id }
          name={ this.props.images.name }
          imageLink={ this.props.images.image }/>

        <img onClick={(e) => this.handleClick(e)} src={ this.props.images.image } />

      </div>
    )
  }
}



export default ImageCard
