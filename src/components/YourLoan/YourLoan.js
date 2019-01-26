import React from 'react';

import CalculateButton from '../CalculateButton/CalculateButton';
import LoanAmount from '../LoanAmount/LoanAmount';
import Interest from '../Interest/Interest';
import Term from '../Term/Term';

export class YourLoan extends React.Component {

    render() {

        /*
            if calculate display loan calculations
            else show inputs
        */
        return (
            <div className="inputs">
                <Interest />
                <LoanAmount />
                <Term />
                <CalculateButton />
            </div>
        );
    }
};

export default YourLoan;
