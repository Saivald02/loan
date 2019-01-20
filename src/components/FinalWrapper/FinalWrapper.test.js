import React from 'react';
import { shallow } from 'enzyme';
import FinalWrapper from './FinalWrapper';

describe('FinalWrapper tests', () => {
    it('should contain the item provided', () => {

        const component = shallow(<FinalWrapper/>);
        expect(component.find('div').text()).toEqual('');
    });
});
