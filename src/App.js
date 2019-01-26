import React, { Component } from 'react';

import './App.css';

//import CalculateButton from './components/CalculateButton/CalculateButton';

/*
import LoanAmount from './components/LoanAmount/LoanAmount';
import Interest from './components/Interest/Interest';
import Term from './components/Term/Term';

import Extra from './components/Extra/Extra';
*/
//import DisplayWrapper from './components/DisplayWrapper/DisplayWrapper';
import Choice from './components/Choice/Choice';
import Welcome from './components/Welcome/Welcome';

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
        <h1>https://saivald02-loan.herokuapp.com/</h1>
        <div className="wrapper">
          <Welcome />
          <Choice />
        </div>
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
