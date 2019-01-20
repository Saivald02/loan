import { EXTRA } from '../constants/extraConstants';
//import fetch from 'isomorphic-fetch';
// room Name
// room Ops
// room users
// this.setState({ creator: username, chatroom: room, joinRoom: true });

export const currentExtra = (extra) => {
    console.log(extra);
    return {
        type: EXTRA,
        payload: extra
    };
};
