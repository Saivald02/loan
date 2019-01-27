import React from 'react';
import { connect } from 'react-redux';

export class Results extends React.Component {

    render() {

        if(this.props.start === 'savings') {
            return (
                <div className="">
                    Savings results
                </div>
            );
        } else if (this.props.start === 'your_loan') {
            return (
              <div className="">
                  Loan results
              </div>
            );
        } else if (this.props.start === 'lower_your_loan') {
            return (
                <div className="">
                    Lower loan results
                </div>
            );
        }
    }
};

const mapStateToProps = ({ start, loanAmount, term, interest, calculate, extra }) => {
    return { start, loanAmount, term, interest, calculate, extra };
}

export default connect(mapStateToProps, { }) (Results);
