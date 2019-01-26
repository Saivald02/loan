import React from 'react';

import { connect } from 'react-redux';

import { startup } from '../../actions/startupActions';
import { calculateNow } from '../../actions/calculateActions';
import { calculations_clear } from '../../actions/calculationsActions';
//import Extra from '../Extra/Extra';

export class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            choice: 'your_loan'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({
          choice: event.target.value,

      });
      this.props.startup(event.target.value);
    }

    calc(value) {
        this.props.calculateNow(value);
        this.props.calculations_clear();
    }

    render() {
        if(this.props.calculate === true) {
            return (
              <div className="">
                  <button type="button" className="" onClick={() => this.calc(false)}>back</button>
              </div>
            );
        } else {
            return (
                <div>
                    <div>
                        <label>
                            <input
                              type="radio"
                              value="your_loan"
                              checked={this.state.choice === "your_loan"}
                              onChange={this.handleChange}
                            />
                            Calculate your loan
                        </label>

                        <label>
                            <input
                              type="radio"
                              value="savings"
                              checked={this.state.choice === "savings"}
                              onChange={this.handleChange}
                            />
                            Savings
                        </label>

                        <label>
                            <input
                              type="radio"
                              value="lower_your_loan"
                              checked={this.state.choice === "lower_your_loan"}
                              onChange={this.handleChange}
                            />
                            Lower your loan
                        </label>

                    </div>
                </div>
            );
        }
    }
};


const mapStateToProps = ({ start, calculate }) => {
    return { start, calculate };
}

export default connect(mapStateToProps, { startup, calculations_clear, calculateNow })(Welcome);
