import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow } from 'enzyme';
describe('App', () => {

  it('should contain the item provided', () => {
      const component = shallow(<App />);
      expect(component.find('div div').first().text('hello test comp')).toEqual('hello test comp');
  });

});
/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/
