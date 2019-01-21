import { EXTRA_PAY } from '../constants/extraPayConstants';

const extraPayReducer = ( state = false, action ) => {

    //console.log('--- chatroom reducer ---');
    //console.log(action);
    //console.log(action);
    //console.log(action);
    //console.log(state);
    //obj = { creator: '', chatroom: '', joinRoom: false };
    // creator: '', op: false,  currRoom: 'lobby', joinRoom: false

    switch (action.type) {
        case EXTRA_PAY: return action.payload;
        default: return state;
    }
};

export default extraPayReducer;
