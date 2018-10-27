
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { EndAmount } from './EndAmount';

describe('EndAmount', () => {

  it('should contain the item provided', () => {
      const component = shallow(<EndAmount />);
      expect(component.find('div').first().text('Final amount:')).toEqual('Final amount:');
  });

});
