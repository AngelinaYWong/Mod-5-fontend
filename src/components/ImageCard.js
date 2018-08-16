import React, { Component } from 'react';
import '../stylesheets/imagecard.css';
// import Lightbox from 'react-images';


class ImageCard extends Component {


  handleClick = () => {

  }

  render() {
    return(
      <div id="container" className="image-card">
        <button id="button" className="plus-button">+</button>

        <img id="pic" src={ this.props.images.image } />

      </div>
    )
  }
}



export default ImageCard
