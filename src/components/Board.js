import React, { Component } from 'react';
// import { Card, Image } from 'semantic-ui-react';
import BoardCard from './BoardCard';
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

    let getColor = localStorage.getItem('color')
    if (getColor)
      {this.setState({background: getColor})}

    this.props.getBoard(this.props.selectedBoard)
    fetch(`http://localhost:4000/api/v1/boards/${this.props.selectedBoard}`)
    .then(r=>r.json())
    .then((r) => {
      // console.log(r)
      this.setState({ pictures: r.images.sort((a,b) => {
        return b.id - a.id
      })
     })
    })
  }

  onClick = (id) => {
    fetch(`http://localhost:4000/api/v1/images/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        accept: 'application/json'
      }
      // body: JSON.stringify({
      //   image: {name, ImgId, src}
      // })
    })
    .then(r => r.json())
    .then( data => this.setState({pictures: data.sort((a,b) => {
      return b.id - a.id
    })
  })
)
    .then(r => console.log(r))
    .catch(r => console.log(r))
  }

  displayPictures = () => {

    let allPictures = this.state.pictures.map((image) =>
    <BoardCard onClick={this.onClick} src={image.src} id={image.id}/>
    )
    return allPictures
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
