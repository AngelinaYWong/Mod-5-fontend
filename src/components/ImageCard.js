import React, { Component } from 'react';
import '../stylesheets/imagecard.css';
import ImageOverlay from './ImageOverlay';
import { Image } from 'semantic-ui-react';
// import Lightbox from 'react-images';


class ImageCard extends Component {


  render() {


    return(

      <div id="container" className="image-card">

        <ImageOverlay className="overlay" imgId={ this.props.images.id }
          name={ this.props.images.name }
          imageLink={ this.props.images.image || this.props.images.src }/>

        <img onClick={(e) => this.props.handleClick(e)} src={  this.props.images.image } id={ this.props.images.image} />

      </div>
    )
  }
}



export default ImageCard
