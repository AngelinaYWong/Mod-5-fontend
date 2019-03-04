import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../stylesheets/board.css';

class BoardCard extends Component {


  render() {
    return (
      <div className="boardDiv">
        <button className="xButton" onClick = { () => this.props.onClick(this.props.id) }
        > x </button>

        <Card id="boardCard">
          <Image src={this.props.src} />
          <id id={this.props.id} />
        </Card>
      </div>
    )
  }
}


export default BoardCard;
