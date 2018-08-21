import React, { Component } from 'react';
import { Image, Reveal } from 'semantic-ui-react'
import '../stylesheets/imagecard.css';
import ImageCard from './ImageCard';

class ImageOverlay extends Component {

  handleClick = (e) => {
    const name = this.props.name
    const id = this.props.imgId
    const image = this.props.imageLink

    fetch('http://localhost:4000/api/v1/images/create', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({
        image: {name, id, image}
      })
    })
    .then(resp => {
      fetch('http://localhost:4000/api/v1/boardimage/create', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json'
        },
        body: JSON.stringify({
          boardimage: {boardId, id}
        })
      })
    })
  }

  // click needs to add image info to the board/img/ and boardImage tables with a find or create by

  render() {
    return (
      <div className="overlay">
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }

}

const mapStateToProps  = (state) => {
  return {
    selectedBoard: state.selectedBoard
  }
}

export default connect(mapStateToProps, null)(ImageOverlay);
