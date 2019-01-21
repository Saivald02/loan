import React from 'react';

import { connect } from 'react-redux';

import { extraPay } from '../../actions/extraPayActions';

import Extra from '../Extra/Extra';

export class ExtraToggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 'large'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({
          size: event.target.value,

      });
      this.props.extraPay(!this.props.toggleExtra);
    }

    render() {

        return (
            <div>
                <div>
                    <label>
                        <input
                          type="radio"
                          value="medium"
                          checked={this.state.size === "medium"}
                          onChange={this.handleChange}
                        />
                        Pay extra
                    </label>

                    <label>
                        <input
                          type="radio"
                          value="large"
                          checked={this.state.size === "large"}
                          onChange={this.handleChange}
                        />
                        Don't pay extra
                    </label>
                </div>
                <Extra />
            </div>
        );
    }
};

const mapStateToProps = ({ toggleExtra }) => {
    return { toggleExtra };
}

export default connect(mapStateToProps, { extraPay })(ExtraToggle);
