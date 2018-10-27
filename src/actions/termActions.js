import { TERM } from '../constants/termConstants';
//import fetch from 'isomorphic-fetch';
// room Name
// room Ops
// room users
// this.setState({ creator: username, chatroom: room, joinRoom: true });

export const currentTerm = (term) => {
    return {
        type: TERM,
        payload: term
    };
};
