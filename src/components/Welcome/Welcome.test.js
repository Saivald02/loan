import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Welcome } from './Welcome';

describe('Welcome', () => {

  it('should contain the item provided -> welcome', () => {
      const component = shallow(<Welcome />);
      expect(component.find('h2').first().text('Welcome to loan calculator')).toEqual('Welcome to loan calculator');
  });
});
