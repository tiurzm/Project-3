import React, { Component } from "react";
import "./style.css";
import Clock from "../clock"

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "February 29,2020",
      newDeadline: ""
    };
  }

  changeDeadline() {
      console.log('state', this.state)
      this.setState({deadline: this.state.newDeadline})
  }

  render() {
    return (
      <div className="countdown mt-5">
        <div>Countdown Until {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <div>
          <input placeholder="New Date" onChange={event => this.setState({newDeadline: event.target.value})}/>
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Countdown;
