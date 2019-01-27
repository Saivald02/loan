import React from 'react';
import { connect } from 'react-redux';

import GetAll from '../GetAll/GetAll';
import GetAllItem from '../GetAllItem/GetAllItem';
import GetAllItemExtra from '../GetAllItemExtra/GetAllItemExtra';
import Table from '../Table/Table';
import TableExtra from '../TableExtra/TableExtra';
import FinalWrapper from '../Final/Final';

import Results from '../Results/Results';

// https://www.npmjs.com/package/react-charts

import Canvas from '../Canvas/Canvas';

export class Display extends React.Component {

    render() {
        console.log('display render');

        var extra = Number(this.props.extra);
        const { list } = this.props;

        if(this.props.calculate === true && this.props.start === 'your_loan') {
            return (
                <div className="">
                    <div className="display">
                        <Results />
                        <Canvas all={list.finalCanvas}/>
                        <Table/>
                        <GetAll>
                            { list.list.map((one, i) => (<GetAllItem key={i} all={one} />)) }
                        </GetAll>
                        <FinalWrapper all={list.finalObj}/>
                    </div>
                </div>
            );
        } else if (this.props.calculate === true && this.props.start === 'lower_your_loan') {
            return (
              <div className="">
                  <div className="display">
                      <Results />
                      <Canvas all={list.finalCanvas}/>
                      <TableExtra/>
                      <GetAll>
                          { list.list.map((one, i) => (<GetAllItemExtra key={i} all={one} />)) }
                      </GetAll>
                      <FinalWrapper all={list.finalObj}/>
                  </div>
              </div>
            );
        } else if (this.props.calculate === true && this.props.start === 'savings') {
            return (
                <div> Savings results </div>
            );
        }
    }
};

const mapStateToProps = ({ start, loanAmount, term, interest, calculate, extra, list }) => {
    return { start, loanAmount, term, interest, calculate, extra, list };
}

export default connect(mapStateToProps, { }) (Display);
