import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CalculateButton from './components/CalculateButton/CalculateButton';
import TestComp from './components/TestComp/TestComp';
import EndAmount from './components/EndAmount/EndAmount';
import LoanAmount from './components/LoanAmount/LoanAmount';
import Interest from './components/Interest/Interest';
import Term from './components/Term/Term';


// https://codeclimate.com
// https://circleci.com
// https://www.heroku.com/
// https://saivald02-loan.herokuapp.com/

// https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675

// create reaact-app + redux
// https://medium.com/backticks-tildes/setting-up-a-redux-project-with-create-react-app-e363ab2329b8
export class App extends Component {
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
        <EndAmount />
        <Interest />
        <LoanAmount />
        <Term />
        <div>hello test comp</div>
      </div>
    );
  }
}

/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import { createStore } from 'redux';

ReactDOM.render(<Provider store={createStore(reducers)}><App/></Provider>, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
export default App;
