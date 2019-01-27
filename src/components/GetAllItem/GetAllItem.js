import React from 'react';

export const GetAllItem = ({ all }) => {
    return (
        <div className="table-middle-item">
            <div className="table-item">{all.i}</div>
            <div className="table-item">{all.amount}</div>
            <div className="table-item">{all.currInterest}</div>
            <div className="table-item">{all.downPay}</div>
            <div className="table-item">{all.total}</div>
        </div>
    );
};

export default GetAllItem;
