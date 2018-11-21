import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getBoard } from '../actions/index';
import { SketchPicker } from 'react-color';
import '../stylesheets/board.css';


class Board extends Component {

  state = {
    pictures: [],
    background: '#fff',
    boardId: [],
  }

  componentDidMount() {
    // console.log('component',this.props.selectedBoard)
    // console.log(this.props)
    let getColor = localStorage.getItem('color')
    if (getColor)
      {this.setState({background: getColor})}

    this.props.getBoard(this.props.selectedBoard)
    fetch(`http://localhost:4000/api/v1/boards/${this.props.selectedBoard}`)
    .then(r=>r.json())
    .then((r) => this.setState({ pictures: r.images }))
  }

  displayPictures = () => {

    let dinosaur = this.state.pictures.map((image) =>
    <Card id="boardCard">
      <Image src={image.src} />
    </Card>)

    return dinosaur
  }

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex }, () => {
      console.log(this.state.background)
      if (color)
      { localStorage.setItem('color', color.hex) }
    })}

  render() {

    return(

      <div id="BoardImageContainer" style={{backgroundColor:`${this.state.background}`}} >

        { this.displayPictures() }

        <SketchPicker color={ this.state.background } onChange={ this.handleChangeComplete }/>

      </div>
    )
  }
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
