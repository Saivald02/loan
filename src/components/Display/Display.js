import React from 'react';
import { connect } from 'react-redux';

import GetAll from '../GetAll/GetAll';
import GetAllItem from '../GetAllItem/GetAllItem';
import GetAllItemExtra from '../GetAllItemExtra/GetAllItemExtra';
import Table from '../Table/Table';
import TableExtra from '../TableExtra/TableExtra';
import FinalWrapper from '../Final/Final';

/*
import CalculateButton from '../CalculateButton/CalculateButton';

import LoanAmount from '../LoanAmount/LoanAmount';
import Interest from '../Interest/Interest';
import Term from '../Term/Term';
import ExtraToggle from '../ExtraToggle/ExtraToggle';
*/

// https://www.npmjs.com/package/react-charts

import Canvas from '../Canvas/Canvas';


export class Display extends React.Component {

    render() {
        console.log('display render');

        var extra = Number(this.props.extra);
        const { list } = this.props;
        //console.log(list);
        if(this.props.calculate === true && extra === 0) {
            return (
                <div className="">
                    <div className="display">
                        <div>Results</div>
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
