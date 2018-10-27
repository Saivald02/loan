import { INTEREST } from '../constants/interestConstants';

const interestReducer = ( state = 0 , action ) => {

    //console.log('--- chatroom reducer ---');
    //console.log(action);
    //console.log(action);
    //console.log(action);
    //console.log(state);
    //obj = { creator: '', chatroom: '', joinRoom: false };

    // creator: '', op: false,  currRoom: 'lobby', joinRoom: false
    switch (action.type) {
        case INTEREST: return action.payload;
        default: return state;
    }
};

export default interestReducer;
