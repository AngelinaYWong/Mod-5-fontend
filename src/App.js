import React, { Component } from 'react';
import NavBar from './components/NavBar';
// import SearchResultsContainer from './components/SearchResultsContainer';
// import Profile from './components/Profile'
// import Board from './components/Board'
// import { Route, Switch, Link } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react'
import './App.css';


class App extends Component {


  render() {

    return (
      <React.Fragment>

        <Header as='h2'>
          <Icon name='eye' />
          <Header.Content>Vision Board</Header.Content>
        </Header>

        <NavBar />

          {/* <div>
            <Switch>
              <Route exact path='/'/>
              <Route path='/profile' component={ Profile } />
              <Route path='/board' component={ Board } />
              <Route path='/search' component={SearchResultsContainer} />

            </Switch>
          </div> */}

      </React.Fragment>
    );
  }
}

export default App;
