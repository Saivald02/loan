import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Table } from './Table';

describe('Table', () => {

  it('should contain the item provided -> Table', () => {
      const component = shallow(<Table />);
      expect(component.find('div div').first().text('#')).toEqual('#');
  });
});
