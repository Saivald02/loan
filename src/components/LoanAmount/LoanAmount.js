import React from 'react';

import { connect } from 'react-redux';

import { currentLoanAmount } from '../../actions/loanAmountActions';

export class LoanAmount extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          amount: '',
          //userStatus: false
      };
  }

  inputAmount(value) {
      if(value === '' || value === null || value === undefined) {
          console.log('empty');
          this.props.currentLoanAmount(0);
      } else {
          var num = Number(value);
          this.props.currentLoanAmount(num);
      }

  }

  render() {
      return (
          <div>
              <p>LoanAmount</p>
              <div className="">
                  <input
                      type="text"
                      className=""
                      onInput={(e) => this.inputAmount(e.target.value)} />
              </div>
          </div>
      );
  }
};

const mapStateToProps = ({ loanAmount }) => {
    //console.log('get rooms map');
    //console.log(rooms);
    //console.log(logged);
    //console.log(username);
    return { loanAmount };
}

export default connect(mapStateToProps, { currentLoanAmount })(LoanAmount);
