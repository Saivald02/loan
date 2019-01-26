import React from 'react';
import { connect } from 'react-redux';

import Savings from '../Savings/Savings';
import YourLoan from '../YourLoan/YourLoan';
import LowerYourLoan from '../LowerYourLoan/LowerYourLoan';

export class Choice extends React.Component {

    componentDidMount() {

    }

    render() {
        console.log('choice render');

        if(this.props.start === 'savings') {
            return (
                <div className="">
                    <Savings />
                </div>
            );
        } else if (this.props.start === 'your_loan') {
            return (
              <div className="">
                  <YourLoan />
              </div>
            );
        } else if (this.props.start === 'lower_your_loan') {
            return (
                <div className="">
                    <LowerYourLoan />
                </div>
            );
        }
    }
};

const mapStateToProps = ({ start }) => {
    return { start };
}

export default connect(mapStateToProps, { }) (Choice);
