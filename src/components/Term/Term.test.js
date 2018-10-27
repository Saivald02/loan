import React from 'react';
import { shallow } from 'enzyme';

import Term from './Term';

describe('Term', () => {

  it('should contain the item provided', () => {
      const component = shallow(<Term />);
      expect(component.find('div').first().text('hello test comp')).toEqual('hello test comp');
  });
});
