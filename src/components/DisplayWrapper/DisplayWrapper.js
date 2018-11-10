import React from 'react';

export class DisplayWrapper extends React.Component {

    render() {
        //const username = this.state.username;
        //const userStatus = this.props.logged;
        //console.log('--- render login ---');

        /*
            A = P * r(1+r)^n    / (1+r)^n-1
            A = amount per period
            P = initial Principal
            r = interest rate per period  (annual interest.. r/12 for per month)
            n = total number of payments per period
        */
        return (
            <Display />
        );
    }
};



export default DisplayWrapper
