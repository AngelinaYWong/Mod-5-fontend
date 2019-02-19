import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../stylesheets/board.css';

class BoardCard extends Component {


  render() {
    return (
      <div className="boardDiv">
        <button onClick = { () => this.props.onClick(this.props.id) }
        style={{zIndex: 2, position: "relative", top: "50px", left: "150px"}}> x </button>
        <Card id="boardCard">
          <Image src={this.props.src} />
          <id id={this.props.id} />
        </Card>
      </div>
    )
  }
}

export default BoardCard;
