import React from 'react';

import { connect } from 'react-redux';

import CalculateLoan from '../CalculateLoan/CalculateLoan';
import CalculateLower from '../CalculateLower/CalculateLower';
import CalculateSavings from '../CalculateSavings/CalculateSavings';

export class CalculateButton extends React.Component {

    render() {
        if(this.props.start === 'savings') {
            return (
                <CalculateSavings />
            );
        } else if(this.props.start === 'your_loan') {
            return (
                <CalculateLoan />
            );
        } else if(this.props.start === 'lower_your_loan') {
            return (
                <CalculateLower />
            );
        }
    }
};

/*
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { CalculateButton } from './CalculateButton.js';

describe('Calculate tests', () => {
    
    it('should contain the item provided', () => {
        const component = shallow(<CalculateButton />);
        expect(component.find('div p').first().text('hello button')).toEqual('hello button');
    });

    it('should fail', () => {
        const component = shallow(<CalculateButton />);
        expect(component.find('div p').first().text('hello button')).not.toBe('something else');
    });

    it('should fail', () => {
        const component = shallow(<CalculateButton />);
        expect(component.find('div p').first().text('hello button')).not.toBe('hello buttons');
    });

});
*/
const mapStateToProps = ({ start }) => {
    return { start };
}

export default connect(mapStateToProps, { })(CalculateButton);
