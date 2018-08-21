import React, { Component } from 'react';
// import imageCard from './ImageCard';
// import { connect } from 'react-redux';
import ColorWheel from 'color-wheel';

class Board extends Component {

  componentDidMount() {

  }

  render() {
    return(
      <div id="BoardImage">
        <ColorWheel onChange={color => console.log(color)} />
      </div>
    )

  }

}
export default Board
// export default connect(mapStateToProps, mapDispatchToProps)(Board)
