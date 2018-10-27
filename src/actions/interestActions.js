import { INTEREST } from '../constants/interestConstants';
//import fetch from 'isomorphic-fetch';
// room Name
// room Ops
// room users
// this.setState({ creator: username, chatroom: room, joinRoom: true });

export const currentInterest = (interest) => {
    console.log(interest);
    return {
        type: INTEREST,
        payload: interest
    };
};
