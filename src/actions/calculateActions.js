import { CALCULATE } from '../constants/calculateConstants';

export const calculateNow = (calc) => {
    return {
        type: CALCULATE,
        payload: calc
    };
};
