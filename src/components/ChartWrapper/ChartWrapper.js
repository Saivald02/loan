import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540]
];

const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" }
};

export class ChartWrapper extends React.Component {

    componentDidMount() {


    }

    render() {

        //console.log(this.props.all);
        console.log('render chart');

        var arr = [];
        var tmp = 0;
        var str = "";
        if(this.props.start === 'savings') {
            return (
                <div className="">
                    Savings results
                </div>
            );
        } else if (this.props.start === 'your_loan') {

            arr.push(["#", "Loan"]);

            for(var i = 0; i < this.props.all.list.length; i++) {
                str = (i+1).toString();
                tmp = [ str, parseFloat(this.props.all.list[i].amount) ]
                arr.push(tmp);
            }

            //console.log(arr);
            //console.log(data);
            return (
              <div className="">
                  <Chart
                      chartType="LineChart"
                      loader={<div>Loading Chart</div>}
                      width="100%"
                      height="400px"
                      data={arr}
                      options={{
                          hAxis: {
                              title: 'Time',
                          },
                          vAxis: {
                              title: 'Popularity',
                          },
                      }}
                  />
              </div>
            );
        } else if (this.props.start === 'lower_your_loan') {
            console.log('render lower your loan');
            arr.push(["#", "NewLoan", "OldLoan"]);

            for(var i = 0; i < this.props.all.list.length; i++) {
                str = (i+1).toString();
                if(parseFloat(this.props.all.list[i].amount) === 0) {
                    tmp = [ str, 0, parseFloat(this.props.all.list[i].oldLoanAmount) ]
                } else {
                    tmp = [ str, parseFloat(this.props.all.list[i].amount), parseFloat(this.props.all.list[i].oldLoanAmount) ]
                }

                arr.push(tmp);
            }
            return (
                <div className="">
                    <Chart
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        width="100%"
                        height="400px"
                        data={arr}
                        options={{
                            hAxis: {
                                title: 'Time',
                            },
                            vAxis: {
                                title: 'Popularity',
                            },
                        }}
                    />
                </div>
            );
        }
    }
}

ChartWrapper.propTypes = {
    children: PropTypes.node
};



const mapStateToProps = ({ loanAmount, term, interest, calculate, extra, start }) => {
    //console.log('get rooms map');
    //console.log(rooms);
    //console.log(logged);
    //console.log(username);
    return { loanAmount, term, interest, calculate, extra, start };
}

export default connect(mapStateToProps)(ChartWrapper);
