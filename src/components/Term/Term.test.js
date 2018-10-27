
import React from 'react';
import { shallow } from 'enzyme';

import { Term } from './Term';

describe('Term', () => {

  it('should contain the item provided', () => {
      const component = shallow(<Term />);
      expect(component.find('div p').first().text('Term')).toEqual('Term');
  });

});
