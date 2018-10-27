import React from 'react';
import { shallow } from 'enzyme';

import TestComp from './TestComp';

describe('TestComp', () => {

  it('should contain the item provided', () => {
      const component = shallow(<TestComp />);
      expect(component.find('div').first().text('hello test comp')).toEqual('hello test comp');
  });
/*
  it('should render correctly in "debug" mode', () => {

    const component = shallow(<TestComp debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = shallow(<TestComp/>);

    expect(component).toMatchSnapshot();
  });

  it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];

    const component = shallow(<TestComp list={strings} />);

    expect(component).toMatchSnapshot();
  });
*/
});
