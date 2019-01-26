import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Welcome } from './Welcome';

describe('Welcome', () => {

  it('should contain the item provided -> welcome', () => {
      const component = shallow(<Welcome />);
      expect(component.find('div div label').first().text('Calculate your loan')).toEqual('Calculate your loan');
  });
});
