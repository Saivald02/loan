import React from 'react';
import { shallow } from 'enzyme';

import LoanAmount from './LoanAmount';

describe('LoanAmount', () => {

  it('should contain the item provided', () => {
      const component = shallow(<LoanAmount />);
      expect(component.find('div').first().text('LoanAmount')).toEqual('LoanAmount');
  });
});
