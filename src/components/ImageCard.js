import React, { Component } from 'react';

class ImageCard extends Component {
  render() {
    return(
      <div className="image-card">
        <button type="button" className="plus-button btn btn-outline-secondary">+</button> 
        <img src={ this.props.item.image } />
      </div>
    )
  }
}

export default ImageCard
