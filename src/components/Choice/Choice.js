import React from 'react';
import { connect } from 'react-redux';

import Savings from '../Savings/Savings';
import YourLoan from '../YourLoan/YourLoan';
import LowerYourLoan from '../LowerYourLoan/LowerYourLoan';

import Display from '../Display/Display';

export class Choice extends React.Component {

    componentDidMount() {

    }

    render() {
        console.log('choice render');

        if(this.props.start === 'savings' && this.props.calculate === false) {
            return (
                <div className="">
                    <Savings />
                </div>
            );
        } else if (this.props.start === 'your_loan' && this.props.calculate === false) {
            return (
              <div className="">
                  <YourLoan />
              </div>
            );
        } else if (this.props.start === 'lower_your_loan' && this.props.calculate === false) {
            return (
                <div className="">
                    <LowerYourLoan />
                </div>
            );
        } else if(this.props.calculate === true) {
            return (
                <Display />
            );
        }
    }
};

const mapStateToProps = ({ start, calculate }) => {
    return { start, calculate };
}

export default connect(mapStateToProps, { }) (Choice);
