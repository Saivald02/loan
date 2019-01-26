import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Extra } from './Extra';

describe('Extra', () => {
    it('should contain the item provided -> Extra', () => {

        const component = shallow(<Extra />);
        expect(component.find('div').first().text()).toEqual('Extra Payment');
    });
});
