import { LOAN_AMOUNT } from '../constants/loanAmountConstants';
//import fetch from 'isomorphic-fetch';
// room Name
// room Ops
// room users
// this.setState({ creator: username, chatroom: room, joinRoom: true });

export const currentLoanAmount = (loanAmount) => {
    return {
        type: LOAN_AMOUNT,
        payload: loanAmount
    };
};
