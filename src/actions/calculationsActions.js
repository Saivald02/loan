import { CALCULATIONS_LOAN, CALCULATIONS_SAVINGS, CALCULATIONS_LOWER } from '../constants/calculationsConstants';

export const calculations_loan = (data) => {
    //console.log('calculationsActions');
    return {
        type: CALCULATIONS_LOAN,
        payload: data
    };
};

export const calculations_lower = (data) => {
    //console.log('calculationsActions');
    return {
        type: CALCULATIONS_LOWER,
        payload: data
    };
};

export const calculations_saving = (data) => {
    //console.log('calculationsActions');
    return {
        type: CALCULATIONS_SAVINGS,
        payload: data
    };
};
