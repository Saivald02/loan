import React from 'react';
//import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import { currentTerm } from '../../actions/termActions';

export class Term extends React.Component {

    inputTerm(value) {
        console.log('Term: ' + value);

        this.props.currentTerm(value);

        if(value === '' || value === null || value === undefined) {
            console.log('empty');
            this.props.currentTerm(0);
        } else {
            var num = Number(value);
            //console.log(num);
            this.props.currentTerm(num);
        }
    }

    render() {
        return (
            <div>
                <p>Term</p>
                <div className="">
                    <input
                        type="text"
                        className=""
                        onInput={(e) => this.inputTerm(e.target.value)} />
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ term }) => {
    return { term };
}

export default connect(mapStateToProps, { currentTerm })(Term)
