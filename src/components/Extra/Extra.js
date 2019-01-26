import React from 'react';

import { connect } from 'react-redux';
import { currentExtra } from '../../actions/extraActions';

export class Extra extends React.Component {

    inputExtra(value) {
        if(value === '' || value === null || value === undefined) {
            console.log('empty');
            this.props.currentExtra(0);
        } else {
            var num = Number(value);
            this.props.currentExtra(num);
        }
    }

    render() {
        return (
          <div className="input-item">
              <div>Extra Payment</div>
              <div className="">
                  <input
                      type="text"
                      className=""
                      onInput={(e) => this.inputExtra(e.target.value)} />
              </div>
          </div>
        );
    }
};

const mapStateToProps = ({ toggleExtra }) => {
    return { toggleExtra };
}

export default connect(mapStateToProps, { currentExtra })(Extra);
