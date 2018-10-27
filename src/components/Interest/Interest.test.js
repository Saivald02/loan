import React from 'react';
import { shallow } from 'enzyme';

import Interest from './Interest';

describe('Interest', () => {

  it('should contain the item provided', () => {
      const component = shallow(<Interest />);
      expect(component.find('div p').first().text('interest')).toEqual('interest');
  });
});
