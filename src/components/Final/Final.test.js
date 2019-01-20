import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Final } from './Final';

describe('Final', () => {

  it('should contain the item provided -> Final', () => {
      const obj = { total_int: 1, loanAmount: 1, total_pay: 1 };

      const component = shallow(<Final all= { obj } />);
      expect(component.find('div div').first().text()).toEqual('Total:');
  });
});
