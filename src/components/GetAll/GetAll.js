import React from 'react';
import { PropTypes } from 'prop-types';

export const GetAll = ({ children }) => {

    return <div className="table-middle">{children}</div>
};

GetAll.propTypes = {
    children: PropTypes.node
};

export default GetAll;
