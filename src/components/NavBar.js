import React, { Component } from 'react';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import SearchResultsContainer from './SearchResultsContainer';
import SearchBar from './SearchBar';

export default class NavBar extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Button onClick={this.handleButtonClick}>MENU</Button>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Profile
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='th' />
              Boards
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>
                <SearchBar />
              </Header>
              <SearchResultsContainer />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
