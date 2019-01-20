import { EXTRA } from '../constants/extraConstants';

const extraReducer = ( state = 0 , action ) => {

    //console.log('--- chatroom reducer ---');
    //console.log(action);
    //console.log(action);
    //console.log(action);
    //console.log(state);
    //obj = { creator: '', chatroom: '', joinRoom: false };
    // creator: '', op: false,  currRoom: 'lobby', joinRoom: false

    switch (action.type) {
        case EXTRA: return action.payload;
        default: return state;
    }
};

export default extraReducer;
