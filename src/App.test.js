import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow } from 'enzyme';
describe('App', () => {

  it('should contain the item provided', () => {
      const component = shallow(<App />);
      expect(component.find('div h1').first().text('https://saivald02-loan.herokuapp.com/')).toEqual('https://saivald02-loan.herokuapp.com/');
  });

});
/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/
