
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { LoanAmount } from './LoanAmount';

describe('LoanAmount', () => {

  it('should contain the item provided', () => {
      const component = shallow(<LoanAmount />);
      expect(component.find('div').first().text('LoanAmount')).toEqual('Amount');
  });

});
