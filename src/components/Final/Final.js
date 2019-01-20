import React from 'react';
import { PropTypes } from 'prop-types';

/*
<div className="table-item">
    <div className="table-item-1">#</div>
    <div className="table-item-1">Amount left</div>
    <div className="table-item-1">interest</div>
    <div className="table-item-1">down-payment</div>
    <div className="table-item-1">total payment</div>
</div>
<li className="display-list-item table-item-2">{all.i} interest: {all.currInterest} amount: {all.amount} payment: {all.downPay} total: {all.total}</li>
*/
export const Final = ({ all }) => {
    return (
        <div className="table-bottom-item">
            <div className="table-item">Total:</div>
            <div className="table-item"> {all.total_int}</div>
            <div className="table-item"> {all.loanAmount}</div>
            <div className="table-item"> {all.total_pay}</div>
        </div>
    );
};

Final.propTypes = {
    rooms: PropTypes.string
};

export default Final;
