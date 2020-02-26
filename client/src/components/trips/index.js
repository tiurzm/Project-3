import React, { Component } from "react";
import axios from "../../utils/API";
import Clock from "../clock";
import Calender from "../../components/calendar";

class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [], 
      show: false
    };

    this.handleCalendarChange = this.handleCalendarChange.bind(this);
  }

  componentDidMount() {
    axios.getTrips().then(resp => {
      let tripData = resp.data[0].trip;

      this.setState({ trips: tripData });
    });
  }

  toggleTrip = () => {
    this.setState({
      show: !this.state.show
    })
  }

  handleCalendarChange(didItChange) {
    axios.getTrips().then(resp => {
      console.log(resp)
      let tripData = resp.data[0].trip;

      this.setState({
        trips: tripData,
      });
    });
  }

  render() {
    return (

      <div>
        {/* {this.state.trips.map(trip => {
          return (
            <p>
              Trip Title: {trip.title} <br /> */}
              {/* Trip ID: {trip._id}<br/> */}
              {/* Trip User: {trip.user}<br/> */}
              {/* Guests: {trip.guests}
              <br />
              Trip Start <Clock deadline={trip.start} />
              <br /> */}
              {/* Trip End {trip.end}<br/> */}
              {/* Description {trip.description}
            </p>
          );
        })} */}

        <div className="accordion" id="trip">
          {this.state.trips.map(trip => {
            console.log(trip)
            return (
              <div className="card">
                <div className="card-header" id={trip._id} onClick= {this.toggleTrip}>
                  <h2 className="mb-0" >
                    <button
                      className="btn btn-link"
                      type="button" 
                    >
                      {trip.title}
                    </button>
                  </h2>
                </div>
                {this.state.show && 
                <div
                  id="a-trip"
                >
                  <div className="card-body">
                    Guests: {trip.guests} <br />
                    Trip Start: <Clock deadline={trip.start} /> <br />
                    Description: {trip.description}
                  </div>
                </div>
                }
              </div>
            )
          })}
        </div>

        <Calender detectChange={this.handleCalendarChange} />
      </div>
    );
  }
}

export default Trips;
