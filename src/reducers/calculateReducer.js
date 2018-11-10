import { CALCULATE } from '../constants/calculateConstants';

const calculateReducer = ( state = false, action ) => {

    //console.log('--- chatroom reducer ---');
    //console.log(action);
    //console.log(action);
    //console.log(action);
    //console.log(state);
    //obj = { creator: '', chatroom: '', joinRoom: false };

    // creator: '', op: false,  currRoom: 'lobby', joinRoom: false
    switch (action.type) {
        case CALCULATE: return action.payload;
        default: return state;
    }
};

export default calculateReducer;
