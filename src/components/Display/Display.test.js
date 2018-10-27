
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Display } from './Display';

describe('Display', () => {
  
  it('should contain the item provided', () => {
      const component = shallow(<Display />);
      expect(component.find('div').first().text('hello test comp')).toEqual('hello test comp');
  });

});
