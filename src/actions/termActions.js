import { TERM } from '../constants/termConstants';
//import fetch from 'isomorphic-fetch';
// room Name
// room Ops
// room users
// this.setState({ creator: username, chatroom: room, joinRoom: true });

export const currentTerm = (term) => {

    if(term > 40) {
        term = 40;
    } else if (term < 1) {
        term = 1;
    }
    return {
        type: TERM,
        payload: term
    };
};
