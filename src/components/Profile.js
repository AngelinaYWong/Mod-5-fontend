import React, { Component, Fragment } from 'react';
import ExFeed from './Feed';
import { Feed, Card, Icon, Image } from 'semantic-ui-react';

class Profile extends Component {


  render() {

    return(
      <Fragment>
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>

        <ExFeed />
        <Card>
          <h2> Your Boards </h2>
        </Card>
      <Card.Group itemsPerRow={3}>
        <Card color='green' raised image='https://react.semantic-ui.com/images/wireframe/white-image.png' />
        <Card color='purple' raised image='https://react.semantic-ui.com/images/wireframe/white-image.png' />
        <Card color='pink' raised image='https://react.semantic-ui.com/images/wireframe/white-image.png' />
        <Card color='blue' raised image='https://react.semantic-ui.com/images/wireframe/white-image.png' />
        <Card color='red' raised image='https://react.semantic-ui.com/images/wireframe/white-image.png' />
        <Card color='teal' raised image='https://react.semantic-ui.com/images/wireframe/white-image.png' />
      </Card.Group>

    </Fragment>

    )
  }
}

export default Profile;
