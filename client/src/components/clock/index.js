import React, { Component } from "react";

class Clock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline)
    }

    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.props.deadline))
    }

    leading0(num) {
    
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date())
        const seconds = Math.floor((time/1000)%60)
        const minutes = Math.floor((time/1000/60)%60)
        const hours = Math.floor(time/(1000*60*60)%24)
        const days = Math.floor(time/(1000*60*60*24))

        // console.log('time', days, hours, minutes, seconds);
        this.setState({
            days,
            hours,
            minutes,
            seconds
        })

    }

  render() {
    return (
      <div>
        <div className="clock" style={{fontSize: "20px"}} >
          {this.leading0(this.state.days)} days, {this.leading0(this.state.hours)} hours: {this.leading0(this.state.minutes)} minutes: {this.leading0(this.state.seconds)} seconds.
        </div>
      </div>
    );
  }
}

export default Clock;
