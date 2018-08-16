import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SearchResultsContainer from './components/SearchResultsContainer';

// import Lightbox from 'react-images';
import './App.css';


class App extends Component {


  render() {

    return (
      <React.Fragment>
        <div className="App">

          <NavBar  />

        </div>

      </React.Fragment>
    );
  }
}

export default App;
