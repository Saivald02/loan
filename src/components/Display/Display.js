import React from 'react';
import { connect } from 'react-redux';

import GetAll from '../GetAll/GetAll';
import GetAllItem from '../GetAllItem/GetAllItem';

export class Display extends React.Component {

    /*
    componentDidMount() {

        console.log('display mount ');
        if(this.props.calculate === true) {
            console.log('calculate NOW!!');
        }
        var term = this.props.term;
        var items = [];
        for(var i = term; 0 < i; i--) {
              console.log('the term is: ' + i);
        }

        //for(var i = 0; 0 == amountLeft; i++) {
              // setja inn i, interest, payment, whatIsLeft í lista
    }
    */
    render() {
        console.log('display render');
        //const username = this.state.username;
        //const userStatus = this.props.logged;
        //console.log('--- render login ---');

        /*
            A = P * r(1+r)^n    / (1+r)^n-1
            A = amount per period
            P = initial Principal
            r = interest rate per period  (annual interest.. r/12 for per month)
            n = total number of payments per period
        */
        var list = [];
        if(this.props.calculate === true) {
            console.log('calculate NOW!!');

            var amount = Number(this.props.loanAmount);
            var interest_rate = Number(this.props.interest);
            var months = Number(this.props.term);
            var currInterest = 0;
            var total = 0;
            months = months * 12;
            var downPay = Number((amount / months));
            interest_rate = Number((interest_rate * 0.01) / 12);

            // total
            var total_interest = 0;
            var total_payment = 0;
            /*
            console.log(interest_rate);
            console.log(amount);
            console.log(months);
            console.log(downPay);
            */

            for(var i = months, j = 1; 0 <= i; i--, j++) {

                currInterest = Number(interest_rate * amount);
                total = Number(downPay + currInterest);

                if(downPay > (amount + currInterest)) {
                    //console.log('amount: ' + amount + ' inter: ' + currInterest + ' payment: ' + amount);
                    var finalPay = Number(amount + currInterest);
                    list.push({i: j, amount: amount.toFixed(2), currInterest: currInterest.toFixed(2), downPay: finalPay.toFixed(2), total: finalPay.toFixed(2) });
                } else {
                    console.log('amount: ' + amount + ' inter: ' + currInterest + ' payment: ' + downPay);
                    list.push({i: j, amount: amount.toFixed(2), currInterest: currInterest.toFixed(2), downPay: downPay.toFixed(2), total: total.toFixed(2)});
                    total_payment = total_payment + downPay + currInterest;
                    total_interest = total_interest + currInterest;
                }
                amount = Number(amount - downPay);

                if(amount < 1) {
                    break;
                }
            }

            var total_pay = total_payment.toFixed(0);
            var total_int = total_interest.toFixed(0);
            // component með total tölum neðst..
            console.log(list);
        }

        return (
            <div>
                <p>hello test comp</p>
                <GetAll>
                    { list.map((one, i) => (<GetAllItem key={i} all={one} />)) }
                </GetAll>
                <div>Total: payment: { this.props.loanAmount } interest: { total_int } total: { total_pay }</div>
            </div>
        );
    }
};

const mapStateToProps = ({ loanAmount, term, interest, calculate }) => {
    //console.log('get rooms map');
    //console.log(rooms);
    //console.log(logged);
    //console.log(username);
    return { loanAmount, term, interest, calculate };
}

export default connect(mapStateToProps)(Display);
