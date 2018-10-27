import { combineReducers } from 'redux';

import interest from './interestReducer';
import term from './termReducer';
import loanAmount from './loanAmountReducer';


export default combineReducers({
    term, interest, loanAmount
});
