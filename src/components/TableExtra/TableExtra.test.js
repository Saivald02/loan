import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { TableExtra } from './TableExtra';

describe('Table', () => {

  it('should contain the item provided -> Table', () => {
      const component = shallow(<TableExtra />);
      expect(component.find('div div').first().text('#')).toEqual('#');
  });
});
