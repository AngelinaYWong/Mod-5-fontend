import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../stylesheets/board.css';

class BoardCard extends Component {

  render() {
    return (
      <Card id="boardCard">
        <Image src={image.src} />
        <id id={image.id} />
      </Card>
    )
  }

}
