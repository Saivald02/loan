import { START_UP } from '../constants/startupConstants';

const startupReducer = ( state = 'your_loan', action ) => {
    switch (action.type) {
        case START_UP: return action.payload;
        default: return state;
    }
};

export default startupReducer;
