import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CalculateButton from './components/CalculateButton/CalculateButton';
import TestComp from './components/TestComp/TestComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload hello everyone testing.
            https://saivald02-loan.herokuapp.com/
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <CalculateButton/>
        <TestComp />
      </div>
    );
  }
}

export default App;
