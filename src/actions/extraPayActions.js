import { EXTRA_PAY } from '../constants/extraPayConstants';
//import fetch from 'isomorphic-fetch';
// room Name
// room Ops
// room users
// this.setState({ creator: username, chatroom: room, joinRoom: true });

export const extraPay = (extra) => {
    console.log(extra);
    return {
        type: EXTRA_PAY,
        payload: extra
    };
};
