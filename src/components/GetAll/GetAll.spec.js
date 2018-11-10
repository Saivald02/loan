import React from 'react';
import { shallow } from 'enzyme';
import GetAll from './GetAll';

describe('GetAll tests', () => {
    it('should contain the item provided', () => {

        const component = shallow(<GetAll/>);
        expect(component.find('ul').text()).toEqual('');
    });
});
