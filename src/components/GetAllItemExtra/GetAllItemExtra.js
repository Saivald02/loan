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
export const GetAllItem = ({ all }) => {
    return (
        <div className="table-middle-item">
            <div className="table-item">{all.i}</div>
            <div className="table-item">{all.amount}</div>
            <div className="table-item">{all.currInterest}</div>
            <div className="table-item">{all.downPay}</div>
            <div className="table-item">{all.total}</div>
            <div className="table-item">{all.totalOldLoan}</div>
        </div>
    );
};


GetAllItem.propTypes = {
    rooms: PropTypes.string
};

export default GetAllItem;
