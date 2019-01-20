import React from 'react';
import { connect } from 'react-redux';

import GetAll from '../GetAll/GetAll';
import GetAllItem from '../GetAllItem/GetAllItem';
import GetAllItemExtra from '../GetAllItemExtra/GetAllItemExtra';
import Table from '../Table/Table';
import TableExtra from '../TableExtra/TableExtra';
import FinalWrapper from '../Final/Final';

import CalculateButton from '../CalculateButton/CalculateButton';

import LoanAmount from '../LoanAmount/LoanAmount';
import Interest from '../Interest/Interest';
import Term from '../Term/Term';
import Extra from '../Extra/Extra';

import Canvas from '../Canvas/Canvas';


export class Display extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true

        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    componentDidMount() {
        /*
        var data = {
            extra: this.props.extra,
            isToggleOn: this.state.isToggleOn,
            loanAmount: this.props.loanAmount,
            interest: this.props.interest,
            term: this.props.term
        }

        calculations(data);
        */
        /*
        console.log('display mount ');
        if(this.props.calculate === true) {
            console.log('calculate NOW!!');
        }
        var term = this.props.term;
        var items = [];
        for(var i = term; 0 < i; i--) {
              console.log('the term is: ' + i);
        }
        */
        //for(var i = 0; 0 == amountLeft; i++) {
              // setja inn i, interest, payment, whatIsLeft í lista
    }




    render() {
        console.log('display render');

        var extra = Number(this.props.extra);
        const { list } = this.props;
        console.log(list);
        if(this.props.calculate === true && extra === 0) {

            //const finalObj = {loanAmount: this.props.loanAmount, total_int: total_int, total_pay: total_pay };
            //const finalCanvass = {loanAmount: 1000, term: 24 };

            //const finalCanvas = {loanAmount: this.props.loanAmount, term: months, extraTerm: extraTerm };
            //console.log(finalCanvas);


            return (
                <div className="">

                    <div className="display">
                        <Canvas all={list.finalCanvas}/>
                        <Table/>
                        <GetAll>
                            { list.list.map((one, i) => (<GetAllItem key={i} all={one} />)) }
                        </GetAll>
                        <FinalWrapper all={list.finalObj}/>
                    </div>
                </div>
            );
        } else if (this.props.calculate === true && extra > 0) {
            // show different table for extra payments
            console.log('extra render -------------');
            //const finalObj = {loanAmount: this.props.loanAmount, total_int: total_int, total_pay: total_pay };
            //const finalCanvass = {loanAmount: 1000, term: 24 };

            //const finalCanvas = {loanAmount: this.props.loanAmount, term: months, extraTerm: extraTerm };

            /*
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'xxx' : 'Back'}
            </button>
            */
            return (
              <div className="">
                  <div className="display">
                      <div>Results</div>
                      <Canvas all={list.finalCanvas}/>
                      <TableExtra/>
                      <GetAll>
                          { list.list.map((one, i) => (<GetAllItemExtra key={i} all={one} />)) }
                      </GetAll>
                      <FinalWrapper all={list.finalObj}/>
                  </div>
              </div>
            );
        } else {
            return (
                <div className="inputs">
                    <Interest />
                    <LoanAmount />
                    <Term />
                    <Extra />
                    <CalculateButton />
                </div>
            );
        }
    }
};

const mapStateToProps = ({ loanAmount, term, interest, calculate, extra, list }) => {
    //console.log('get rooms map');
    //console.log(rooms);
    //console.log(logged);
    //console.log(username);
    return { loanAmount, term, interest, calculate, extra, list };
}


export default connect(mapStateToProps, { }) (Display);
