import React from 'react';
import { PropTypes } from 'prop-types';

const GetAllItem = ({ all }) => {
    return (
        <li>{all.i} interest: {all.currInterest} amount: {all.amount} payment: {all.downPay} total: {all.total}</li>
    );
};

GetAllItem.propTypes = {
    rooms: PropTypes.string
};

export default GetAllItem;
