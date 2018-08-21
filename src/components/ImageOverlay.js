import React, { Component } from 'react';
import { Image, Reveal } from 'semantic-ui-react';
import { connect } from 'react-redux'
import '../stylesheets/imagecard.css';
import ImageCard from './ImageCard';

class ImageOverlay extends Component {

  handleClick = (e) => {
    const name = this.props.name
    const ImgId = this.props.imgId
    const src = this.props.imageLink
    const boardId = this.props.selectedBoard

    fetch('http://localhost:4000/api/v1/images/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        accept: 'application/json'
      },
      body: JSON.stringify({
        image: {name, ImgId, src}
      })
    })
    .then(resp => resp.json())
    .then(data => {
      fetch('http://localhost:4000/api/v1/board_images/', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          accept: 'application/json'
        },
        body: JSON.stringify({
          board_image: {board_id: boardId, image_id: data.id}
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
