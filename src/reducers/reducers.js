import { combineReducers } from 'redux';

import interest from './interestReducer';
import term from './termReducer';
import loanAmount from './loanAmountReducer';
import calculate from './calculateReducer';


export default combineReducers({
    term, interest, loanAmount, calculate
});
