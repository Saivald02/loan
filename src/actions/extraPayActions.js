import { EXTRA_PAY } from '../constants/extraPayConstants';

export const extraPay = (extra) => {
    console.log(extra);
    return {
        type: EXTRA_PAY,
        payload: extra
    };
};
