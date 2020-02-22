import React, { Component } from "react";
import axios from '../../utils/API'
import Clock from "../clock"


class Trips extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trips: []        }
    }

  componentDidMount() {
    axios.getTrips().then(resp => {
        let tripData = resp.data[0].trip

        this.setState({trips: tripData})
    });
  }

  render() {
    return <div>
        {this.state.trips.map(trip => {
            return <p>Trip Title: {trip.title} <br/>
            {/* Trip ID: {trip._id}<br/> */}
            {/* Trip User: {trip.user}<br/> */}
            Guests: {trip.guests}<br/>
            Trip Start <Clock deadline={trip.start}/><br/>
            {/* Trip End {trip.end}<br/> */}
            Description {trip.description}</p>
        })}
        {this.props.children}
    </div>;
    
  }
}

export default Trips;
