import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

export class Canvas extends React.Component {

    /*
    state = {
      isPlaying: false
    }
    */


    setRef = (ctx) => {
        //this.ctx = ctx.getContext("2d");
    }


    componentWillReceiveProps() {
        console.log('i got props');
        console.log(this.props.all);
        console.log(this.ctx);
        let canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext("2d");
        this.ctx.save();
        // Use the identity matrix while clearing the canvas
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Restore the transform
        this.ctx.restore();

        console.log('canvas did mount');
        //console.log(this.props);
        var space = 300 / this.props.all.term;
        var here = space/2;

        var poleSize = 150 / this.props.all.term;
        var start = 5;
        // x
        for(var i = 0; i < this.props.all.term; i++) {

            this.ctx.fillRect(here, start, 5, 150);
            here = here + space;
            start = start + poleSize;
            //console.log(here);

            //this.ctx.fillRect(i, 125, 1, 24);
            /*
            if(i % 2 === 0) {
                this.ctx.fillRect(i, 125, 1, 24);
            }
            */
            /*
            this.ctx.beginPath();
            this.ctx.moveTo(0,0);
            this.ctx.lineTo(300,150);
            this.ctx.stroke();
            */

        }
    }

    componentDidMount() {
        //this.ctx.fillRect(10, 100, 50, 50);
        //this.ctx.fillRect(10, 100, 50, 50);
        //console.log(this);

        //var canvas = document.getElementById('canvas');
        //var aspectRatio = 0.5;    // height:width = 3:2
        //canvas.height = canvas.width * aspectRatio;
        //console.log('canvas width: ' + canvas.width);
        //console.log('canvas height: ' + canvas.height);

        // left to pay => {}
        // total months => integer

        //this.ctx.fillRect(x, y, i, j);
        // x => is x position
        // y => is y position (0 is at top)
        // i => is width (starts from x and goes i pixels)
        // j => is length (starts from y and goes j pixel)
        let canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext("2d");
        console.log('canvas did mount <<<');
        //console.log(this.props);
        var space = 300 / this.props.all.term;
        var here = space/2;

        var poleSize = 150 / this.props.all.term;
        var start = 5;
        // x
        this.ctx.fillStyle = "#FF0000";
        for(var i = 0; i < this.props.all.term; i++) {

            this.ctx.fillRect(here, start, 5, 150);
            here = here + space;
            start = start + poleSize;
            //console.log(here);

            //this.ctx.fillRect(i, 125, 1, 24);
            /*
            if(i % 2 === 0) {
                this.ctx.fillRect(i, 125, 1, 24);
            }
            */
            /*
            this.ctx.beginPath();
            this.ctx.moveTo(0,0);
            this.ctx.lineTo(300,150);
            this.ctx.stroke();
            */
        }

        if(this.props.extra > 0) {
            console.log(' canvas extra payment');
            console.log(this.props.all);

            space = 300 / this.props.all.term;

            // x-axis
            here = (space/2) + 5;

            poleSize = 150 / this.props.all.extraTerm;
            start = 5;
            this.ctx.fillStyle = "#FFFFFF";
            for(var j = 0; j < this.props.all.term; j++) {


                this.ctx.fillRect(here, start, 5, 150);
                here = here + space;
                start = start + poleSize;

                if(j >= this.props.all.extraTerm) {
                    break;
                }
            }
        }

    }


    /*
    constructor(props) {
        super(props);

        this._resizeHandler = () => {

            this.canvas.width = this.canvas.clientWidth;
            this.canvas.height = this.canvas.clientHeight;

            this.clearAndDraw();
        }


        this._reDrawHandler = () => {

            //this.canvas.width = this.canvas.clientWidth;
            //this.canvas.height = this.canvas.clientHeight;

            this.clearAndDraw();
        }

    }

    componentDidMount() {
        console.log('canvas did mount');
        window.addEventListener('resize', this._resizeHandler);
        window.addEventListener('keydown', this._reDrawHandler);

        window.addEventListener('keydown', this._reDrawHandler);

        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;

        this.clearAndDraw();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._resizeHandler);
        window.removeEventListener('keydown', this._reDrawHandler);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.secondRect !== prevProps.secondRect) {
            this.clearAndDraw();
        }
    }

    clearAndDraw() {
        const ctx = this.canvas.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.draw(ctx);
        }
    }

    draw(ctx) {

        console.log('key down');
        console.log(this.props);
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        if (this.props.secondRect) {
            ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
            ctx.fillRect(30, 30, 50, 50);
        }
    }

    render() {
        console.log('render canvas');
        console.log(this.props);
        //this.clearAndDraw();
        return (
            <canvas ref={canvas => this.canvas = canvas} />
        );
    }
    */

    render() {
        console.log('render canvas');
        //console.log(this.props);
        //console.log(window.document.getElementById('canvas'));


        //console.log(this);
        return (
         <canvas id="canvas"
            ref={this.setRef}
          />
        );
    }

}

Canvas.propTypes = {
    children: PropTypes.node
};

//export default Canvas;

const mapStateToProps = ({ loanAmount, term, interest, calculate, extra }) => {
    //console.log('get rooms map');
    //console.log(rooms);
    //console.log(logged);
    //console.log(username);
    return { loanAmount, term, interest, calculate, extra };
}

export default connect(mapStateToProps)(Canvas);

/*

handleClick(e) {
  const isPlaying = !this.state.isPlaying;
  this.setState({isPlaying});
  this.props.onChange && this.props.onChange(isPlaying)
}

return (
 <canvas
    width={900}
    height={500}
    ref={this.setRef}
    onClick={() => this.handleClick()}
  />
);
*/
