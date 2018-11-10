import { CALCULATE } from '../constants/calculateConstants';
//import fetch from 'isomorphic-fetch';
// room Name
// room Ops
// room users
// this.setState({ creator: username, chatroom: room, joinRoom: true });

export const calculateNow = (calc) => {
    return {
        type: CALCULATE,
        payload: calc
    };
};
