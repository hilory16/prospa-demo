import React,{Component} from 'react';
import PropTypes from 'prop-types'
export default class Timer extends React.Component {
    constructor() {
      super();
      this.state = { seconds:0};
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
    }

    componentDidMount() {
      this.startTimer()
    }
    
    startTimer() {
      setInterval(this.countDown, 1000);
    }
  
    countDown() {
      const seconds = this.state.seconds + 1
      this.setState({
        seconds: seconds
      });
      
      // Check if we're at max.
      if (seconds == 5) { 
        clearInterval(this.timer);
      }
    }
  
    render() {
      return this.state.seconds
    }
  }

  
Timer.propTypes ={
  grid:PropTypes.number.isRequired,
  seconds:PropTypes.number.isRequired,
  setSeconds:PropTypes.func.isRequired
}