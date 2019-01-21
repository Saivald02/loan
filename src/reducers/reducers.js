import { combineReducers } from 'redux';

import interest from './interestReducer';
import term from './termReducer';
import loanAmount from './loanAmountReducer';
import calculate from './calculateReducer';
import extra from './extraReducer';
import toggleExtra from './extraPayReducer';
import list from './calculationsReducer';

export default combineReducers({
    term, interest, loanAmount, calculate, extra, list, toggleExtra
});
