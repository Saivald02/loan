import React from 'react';

import { connect } from 'react-redux';
//import { shallow } from 'enzyme';
import { calculateNow } from '../../actions/calculateActions';
import { calculations_lower } from '../../actions/calculationsActions';
export class CalculateLower extends React.Component {

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

        this.props.calculations_lower(data);
    }


    render() {

        if(this.props.loanAmount === 0 || this.props.term === 0 || this.props.interest === 0 || this.props.extra === 0) {
            return (
                <div className="input-item">
                    <p>hello button</p>
                    <button type="button" className="" onClick={() => this.calc(false)}> cant calculate lower</button>
                </div>
            );
        } else {
          return (
              <div className="input-item">
                  <p>hello button</p>
                  <button type="button" className="" onClick={() => this.calc(true)}>calculate lower</button>
              </div>
          );
        }
    }
};

//export default CalculateButton;
const mapStateToProps = ({ loanAmount, term, interest, extra }) => {
    return { loanAmount, term, interest, extra };
}

export default connect(mapStateToProps, { calculateNow, calculations_lower })(CalculateLower);
