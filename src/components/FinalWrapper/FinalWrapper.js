import React from 'react';
import { PropTypes } from 'prop-types';

export const FinalWrapper = ({ children }) => {

    return <div className="table-bottom">{children}</div>
};

FinalWrapper.propTypes = {
    children: PropTypes.node
};

export default FinalWrapper;
