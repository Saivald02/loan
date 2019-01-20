import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Extra } from './Extra';

describe('Final', () => {
    it('should contain the item provided -> Extra', () => {

        const component = shallow(<Extra />);
        expect(component.find('div p').first().text()).toEqual('Extra Payment');
    });
});
