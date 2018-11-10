import React from 'react';
import { shallow } from 'enzyme';
import GetAllItem from './GetAllItem';

describe('GetAllItem tests', () => {
    it('should contain the item provided', () => {
        // i: j, amount: amount, currInterest: currInterest, downPay: amount + currInterest, total: amount + currInterest})
        //{all.i} interest: {all.currInterest} amount: {all.amount} payment: {all.downPay} total: {all.total}
        const obj = {i:1, amount:1, currInterest:1, downPay:1, total:1};
        const component = shallow(<GetAllItem all={ obj } />);
        expect(component.find('li').text()).toEqual('1 interest: 1 amount: 1 payment: 1 total: 1');
    });
});

/*
import React from 'react';
import { shallow } from 'enzyme';
import GetAllItem from './GetAllItem';

describe('GetAllItem tests', () => {
    it('should contain the item provided', () => {

        const component = shallow(<GetAllItem all={'Hello!'} />);
        expect(component.find('li').text()).toEqual('Hello!');
    });
});

*/
