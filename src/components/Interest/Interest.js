import React from 'react';

import { connect } from 'react-redux';

import { currentInterest } from '../../actions/interestActions';

export class Interest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            interest: '',
            //userStatus: false
        };
    }

    inputInterest(value) {

        if(value === '' || value === null || value === undefined) {
            console.log('empty');
            this.props.currentInterest(0);
        } else {
            var num = Number(value);
            this.props.currentInterest(num);
        }
    }

    render() {
        //console.log('from store ' + this.props.interest);
        return (
            <div>
                <p>interest</p>
                <div className="">
                    <input
                        type="text"
                        className=""
                        onInput={(e) => this.inputInterest(e.target.value)} />
                </div>
            </div>
        );
    }
};

// onInput={(e) => this.setState({ interest: e.target.value })}
const mapStateToProps = ({ interest }) => {
    //console.log('get rooms map');
    //console.log(rooms);
    //console.log(logged);
    //console.log(username);
    return { interest };
}

export default connect(mapStateToProps, { currentInterest })(Interest);
