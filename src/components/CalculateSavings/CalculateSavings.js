import React from 'react';

import { connect } from 'react-redux';
//import { shallow } from 'enzyme';
import { calculateNow } from '../../actions/calculateActions';
import { calculations_saving } from '../../actions/calculationsActions';

export class CalculateSavings extends React.Component {

  componentDidCatch(error, info) {
      console.log(error, info);
  }

    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            //userStatus: false
        };
    }

    calc(value) {
        //console.log('hello amount function: ' + this.state.amount);
        //console.log(this.props.loanAmount);
        console.log('trying to calculate ' + value);
        this.props.calculateNow(value);

        var data = {
            extra: this.props.extra,
            isToggleOn: false,
            loanAmount: this.props.loanAmount,
            interest: this.props.interest,
            term: this.props.term
        }
        console.log(data);
        //this.props.calculations(data);
    }


    render() {

        if(this.props.loanAmount === 0 || this.props.term === 0 || this.props.interest === 0) {
            return (
                <div className="input-item">
                    <p>hello button</p>
                    <button type="button" className="" onClick={() => this.calc(false)}> cant calculate savings </button>
                </div>
            );
        } else {
          return (
              <div className="input-item">
                  <p>hello button</p>
                  <button type="button" className="" onClick={() => this.calc(true)}>calculate savings</button>
              </div>
          );
        }
    }
};

//export default CalculateButton;
const mapStateToProps = ({ loanAmount, term, interest, extra, start }) => {
    return { loanAmount, term, interest, extra, start };
}

export default connect(mapStateToProps, { calculateNow, calculations_saving })(CalculateSavings);
