import React from 'react';

import { connect } from 'react-redux';
//import { shallow } from 'enzyme';
export class CalculateButton extends React.Component {

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

    amount() {
        //console.log('hello amount function: ' + this.state.amount);
        console.log(this.props.loanAmount);
    }

    render() {
        //const username = this.state.username;
        //const userStatus = this.props.logged;
        //console.log('--- render login ---');

        if(this.props.loanAmount === 0 || this.props.term === 0 || this.props.interest === 0) {
            return (
                <div>
                    <p>hello button</p>
                    <button type="button" className="" onClick={() => this.amount()}> cant calculate</button>
                </div>
            );
        } else {
          return (
              <div>
                  <p>hello button</p>
                  <button type="button" className="" onClick={() => this.amount()}>calculate</button>
              </div>
          );
        }

    }
};

//export default CalculateButton;
const mapStateToProps = ({ loanAmount, term, interest }) => {
    //console.log('get rooms map');
    //console.log(rooms);
    //console.log(logged);
    //console.log(username);
    return { loanAmount, term, interest };
}

export default connect(mapStateToProps)(CalculateButton);
