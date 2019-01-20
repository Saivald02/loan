
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Interest } from './Interest';

describe('Interest', () => {

  it('should contain the item provided', () => {
      const component = shallow(<Interest />);
      expect(component.find('div p').first().text('interest')).toEqual('Interest');
  });

});
