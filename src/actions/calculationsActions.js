import { CALCULATIONS } from '../constants/calculationsConstants';
//import fetch from 'isomorphic-fetch';
// room Name
// room Ops
// room users
// this.setState({ creator: username, chatroom: room, joinRoom: true });

export const calculations = (data) => {
    console.log('calculationsActions');
    return {
        type: CALCULATIONS,
        payload: data
    };
};
