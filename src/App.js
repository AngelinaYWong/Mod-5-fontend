import React, { Component } from 'react';
import SearchResultsContainer from './components/SearchResultsContainer';
import SearchBar from './components/SearchBar';
import './App.css';


class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> MOD 5 PROJECT WORKING TITLE</h1>
        </header>

        <SearchBar />

        <SearchResultsContainer />
      </div>
    );
  }
}

export default App;
