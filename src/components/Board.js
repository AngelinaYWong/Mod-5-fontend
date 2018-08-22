import React, { Component } from 'react';
import ImageCard from './ImageCard';
import { connect } from 'react-redux';
// import ColorWheel from 'color-wheel';
import { getBoard } from '../actions/index';
import { SketchPicker } from 'react-color';

class Board extends Component {

  state = {
    pictures: []
  }

  componentDidMount() {
    // console.log('component',this.props.selectedBoard)
    // console.log(this.props)
    this.props.getBoard(this.props.selectedBoard)
    fetch(`http://localhost:4000/api/v1/boards/${this.props.selectedBoard}`)
    .then(r=>r.json())
    .then((r) => this.setState({ pictures: r.images }))
  }

  displayPictures = () => {
    console.log("DISPLAY THEM")
    let dinosaur = this.state.pictures.map((images) => <ImageCard images={images} />)
    console.log(dinosaur)
    return dinosaur
  }

  render() {

    return(
      
      <div id="BoardImageContainer">

        { this.displayPictures() }

        <SketchPicker />

      </div>
    )

  }

  // need to unmount board when clicking away

}

const mapStateToProps = (state) => {
  return {
    selectedBoard: state.selectedBoard
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBoard: (data) => { dispatch(getBoard(data)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Board)
