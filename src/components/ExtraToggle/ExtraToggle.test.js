import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { ExtraToggle } from './ExtraToggle';

describe('ExtraToggle', () => {
    it('should contain the item provided -> ExtraToggle', () => {

        const component = shallow(<ExtraToggle />);
        expect(component.find('div div label').first().text()).toEqual('Pay extra');
    });
});
