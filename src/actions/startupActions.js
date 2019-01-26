import { START_UP } from '../constants/startupConstants';

export const startup = (value) => {
    return {
        type: START_UP,
        payload: value
    };
};
