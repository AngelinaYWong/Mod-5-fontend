import React, { Component, Fragment } from 'react';
import { Button, Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SearchResultsContainer from './SearchResultsContainer';
import Board from './Board';
// import SearchBar from './SearchBar';
import Profile from './Profile';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {

  state = {
    visible: false,
    clickedButton: 'home',
   }

  handleProfileClick= () => this.setState({ clickedButton: 'profile' })

  handleBoardClick= () => this.setState({ clickedButton: 'board' })

  handleSearchClick= () => this.setState({ clickedButton: 'home' })

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })


  render() {

    const { visible } = this.state

    const renderComponent = () => {
      if(this.state.clickedButton === 'profile'){
        return <Profile />
      }
      else if(this.state.clickedButton === 'board'){
        return <Board />
      }
      else {
        return <SearchResultsContainer />
      }
    }

    return (
      <Fragment>


        <Button onClick={this.handleButtonClick}>MENU</Button>

        <Sidebar.Pushable as={Segment}  id='NavBar'>

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
            <Menu.Item onClick={this.handleProfileClick} as={NavLink} to='/profile' name="profile">
              <Icon name='home' />
              Profile
            </Menu.Item>

            <Menu.Item onClick={this.handleBoardClick} as={NavLink} to='/board'>
              <Icon name='th' />
              Boards
            </Menu.Item>

            <Menu.Item onClick={this.handleSearchClick} as={NavLink} to='/search'>
              <Icon name='search' />
              Library
            </Menu.Item>

          </Sidebar>

          <Sidebar.Pusher>

            <Segment basic>

              <Header as='h3'>


              </Header>


              { renderComponent() }

            </Segment>

          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </Fragment>

    )
  }
}

{/* <Switch>

  <Route exact path='/'/>

  <Route path='/profile' component={ Profile } />

  <Route path='/board' component={ Board } />

  <Route path='/search' component={SearchResultsContainer} />

</Switch> */}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     showBoards: () => { dispatch(showBoards())},
//     showSearchContainer: () => { dispatch(showSearchContainer())}
//   }
// }

const mapStateToProps  = (state) => {
  return {
    clickedView: state.clickedView
  }
}


export default connect(mapStateToProps, null)(NavBar);
