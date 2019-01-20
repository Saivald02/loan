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
        //console.log('from store ' + this.props.interest);
        return (
            <div className="input-item">
                <p>Extra Payment</p>
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

// onInput={(e) => this.setState({ interest: e.target.value })}

const mapStateToProps = ({ extra }) => {
    //console.log('get rooms map');
    //console.log(rooms);
    //console.log(logged);
    //console.log(username);
    return { extra };
}

export default connect(mapStateToProps, { currentExtra })(Extra);
