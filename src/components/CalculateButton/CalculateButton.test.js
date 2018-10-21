import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

import CalculateButton from './CalculateButton.js';

describe('Welcome tests', () => {
    it('should contain the item provided', () => {
        const component = shallow(<CalculateButton />);
        expect(component.find('div').first().text('hello button')).toEqual('hello button');
    });

    it('should fail', () => {
        const component = shallow(<CalculateButton />);
        expect(component.find('div').first().text('hello button')).not.toBe('something else');
    });
});
