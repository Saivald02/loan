import { CALCULATIONS } from '../constants/calculationsConstants';


const initialState = {
    finalCanvas: {},
    finalObj: {},
    list: []
}
const calculationsReducer = ( state = initialState, action ) => {

    //console.log('--- chatroom reducer ---');
    //console.log(action);
    //console.log(action);
    //console.log(action);
    //console.log(state);
    //obj = { creator: '', chatroom: '', joinRoom: false };

    // creator: '', op: false,  currRoom: 'lobby', joinRoom: false
    switch (action.type) {
        case CALCULATIONS:
              console.log('calculations reducer');
              console.log(action.payload);

            var list = [];
            var amount = Number(action.payload.loanAmount);
            var interest_rate = Number((action.payload.interest) * 0.01) / 12;
            var months = Number(action.payload.term) * 12;

            var currInterest = 0;
            var total = 0;
            var downPay = Number((amount / months));

            // total
            var total_interest = 0;
            var total_payment = 0;
            var finalPay = 0;
            var total_pay = 0;
            var total_int = 0;

            // extra
            var extraTerm = 0;
            var extra = Number(action.payload.extra);

            var extraAmountLeft = 0;


            if(extra === 0) {
                console.log('no extra payment');

                for(var i = months, j = 1; 0 <= i; i--, j++) {
                    currInterest = Number(interest_rate * amount);
                    total = Number(downPay + currInterest);

                    if(downPay > (amount + currInterest)) {
                        //console.log('amount: ' + amount + ' inter: ' + currInterest + ' payment: ' + amount);
                        finalPay = Number(amount + currInterest);
                        list.push({i: j, amount: amount.toFixed(2), currInterest: currInterest.toFixed(2), downPay: finalPay.toFixed(2), total: finalPay.toFixed(2) });
                    } else {
                        //console.log('amount: ' + amount + ' inter: ' + currInterest + ' payment: ' + downPay);
                        list.push({i: j, amount: amount.toFixed(2), currInterest: currInterest.toFixed(2), downPay: downPay.toFixed(2), total: total.toFixed(2)});
                        total_payment = total_payment + downPay + currInterest;
                        total_interest = total_interest + currInterest;
                    }

                    amount = Number(amount - downPay);

                    if(amount < 1) {
                        break;
                    }
                }

                total_pay = total_payment.toFixed(0);
                total_int = total_interest.toFixed(0);

            } else if(extra > 0) {

              console.log('extra payment');

              var oldLoantotal = 0;
              var loanFinished = false;



              extraAmountLeft = amount;
              console.log(months);
              for(var x = months, y = 1; 0 <= x; x--, y++) {
                  currInterest = interest_rate * amount;
                  total = downPay + currInterest;
                  oldLoantotal = oldLoantotal + downPay + currInterest;
                  if(loanFinished === false) {
                      if( (downPay + extra) > (extraAmountLeft + currInterest)) {
                          //extraAmountLeft
                          //console.log('amount: ' + amount + ' inter: ' + currInterest + ' payment: ' + amount);

                          extraTerm = y;
                          list.push({ i: y, amount: extraAmountLeft.toFixed(2), currInterest: currInterest.toFixed(2), downPay: extraAmountLeft.toFixed(2), total: (extraAmountLeft + currInterest).toFixed(2), totalOldLoan: total.toFixed(2) });
                      } else {
                          //console.log('amount: ' + amount + ' inter: ' + currInterest + ' payment: ' + downPay);
                          list.push({ i: y, amount: extraAmountLeft.toFixed(2), currInterest: currInterest.toFixed(2), downPay: (total + extra).toFixed(2), total: (total + extra + currInterest).toFixed(2), totalOldLoan: total.toFixed(2) });

                          total_payment = total_payment + downPay + currInterest + extra;
                          total_interest = total_interest + currInterest;

                          //oldLoantotal = oldLoantotal + downPay + currInterest;
                      }
                  } else if(loanFinished === true) {
                      //console.log(currInterest);
                      list.push({ i: y, amount: 0, currInterest: 0, downPay: 0, total: 0, totalOldLoan: total.toFixed(2) });
                  }

                  extraAmountLeft = extraAmountLeft - downPay - extra;
                  amount = amount - downPay;

                  if(extraAmountLeft < 1) {
                      loanFinished = true;
                  }

                  if(amount < 1) {
                      break;
                  }
              }

              total_pay = oldLoantotal.toFixed(0);
              total_int = total_interest.toFixed(0);
            }

        const finalObj = { loanAmount: action.payload.loanAmount, total_int: total_int, total_pay: total_pay };
        //const finalCanvass = {loanAmount: 1000, term: 24 };
        const finalCanvas = { loanAmount: action.payload.loanAmount, term: months, extraTerm: extraTerm };
        console.log('return calculations');
        console.log(finalObj);
        console.log(finalCanvas);
        console.log(list);
        /*
        finalCanvas: {},
        finalObj: {},
        list: []
        */
        return {
                    finalCanvas: finalCanvas,
                    finalObj: finalObj,
                    list: list
                    //arr: [ ...state.arr, action.payload.msg ]
          }
        default: return state;
    }
};

export default calculationsReducer;