import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import TripForm from "components/FormModal";
import TripCard from "components/TripCard";
import "./main.scss";
import axios from "../../utils/API";
import moment from "moment";

export default class DemoApp extends React.Component {

  componentDidMount() {
    this.refreshTrips();
    this.getAllUsers();
  }

  // get all users for guests list
  getAllUsers() {
    axios.getAllUsers().then(resp => {
      console.log(resp.data);
      this.setState({
        users: resp.data
      });
    });
  }

  // display trips on the calendar
  refreshTrips() {
    axios.getTrips().then(resp => {
      this.setState(
        {
          eventSources: resp.data[0].trip.map(e => ({
            ...e,
            start: moment(e.start)
              .add(1, "days")
              .format(),
            end: moment(e.end)
              .add(2, "days")
              .format()
          }))
        },
        function() {
          console.log(this.state.eventSources);
        }
      );
    });
  }

  calendarComponentRef = React.createRef();
  state = {
    calendarWeekends: true,
    eventSources: [],
    id: "",
    title: "",
    location: "",
    start: new Date(),
    end: new Date(),
    description: "",
    showModal: false,
    errorTitle: "",
    errorLocation: "",
    errorStart: "",
    errorEnd: "",
    errorDescription: "",
    showCard: false,
    users: [] 
  }

  
  handleEventClick = (event) => {
    // get the trip's id to get the trip data from database
    console.log(event);
    this.setState({
      showCard: true
    })
    this.handleTrip(event.event.extendedProps._id)
  }

  handleId = (event) => {
    console.log(event);

  }

  // delete trip button
  handleDeleteClick = () => {
    this.setState({
      showCard: false
    })
    this.handleDeleteTrip(this.state.id)
  }

  // upddate trip button
  handleUpdateClick = () => {
    this.setState({
      showCard: false
    })
    this.handleUpdateTrip(this.state.id)
  }

  // get trip's data from database
  handleTrip = (id) => {
    axios.getOneTrip(id)
    .then(res => {
      const dateStart = res.data.start;
      const start = moment(dateStart).format('YYYY-MM-DD');
      const dateEnd = res.data.end; 
      const end = moment(dateEnd).format('YYYY-MM-DD');
      console.log(start)
      this.setState({
        id: res.data._id,
        title: res.data.title,
        location: res.data.location,
        start: start,
        end: end,
        description: res.data.description
      })
    })
    .catch(err => console.log(err));
  }

  // delete a trip
  handleDeleteTrip = (id) => {
    axios.deleteTrip(id)
    .then(() => {
      this.refreshTrips();
    })
  .catch(err => console.log(err));

  }

  // update a trip
  handleUpdateTrip = (id) => {
    axios.update(id)
    .then(res => {
      console.log(res)
      this.setState({
        title: res.data.title,
        location: res.data.location,
        start: res.data.start,
        end: res.data.end,
        description: res.data.description,
        showCard: false
      })
      this.refreshTrips();
    })
    .catch(err => console.log(err));
  }
 
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  toggleWeekends = () => {
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends
    });
  };

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  };

  // close modal and clear input
  handleCloseClick = () => {
    this.setState({
      showModal: false,
      showCard: false,
      errorTitle: "",
      errorStart: "",
      errorLocation: "",
      errorEnd: "",
      errorDescription: ""
    });
  };

  // click calendar
  handleDateClick = () => {
    this.setState({
      showModal: true,
      title: "",
      location:"",
      start: new Date().getUTCHours(),
      end: new Date().getUTCHours(),
      description: ""
    })
  };

  // save a trip to database
  handleSaveTrip = () => {
    if (
      this.state.title &&
      this.state.start &&
      this.state.end &&
      this.state.description
    ) {
      axios
        .saveTrip(this.state)
        .then(() => {
          this.refreshTrips();
          this.setState({
            showModal: false
          });
        })
        .catch(err => console.log(err));
      this.setState({
        title: "",
        location:"",
        start: new Date().getUTCHours(),
        end: new Date().getUTCHours(),
        description: "",
        errorTitle: "",
        errorLocation: "",
        errorStart: "",
        errorEnd: "",
        errorDescription: ""
      });
    } else {
      this.setState({
        errorTitle: "*Please enter your trip name",
        errorLocation: "*Please enter your trip location",
        errorStart: "*Please enter the start date",
        errorEnd: "*Please enter the end date",
        errorDescription: "*Please enter the description"
      });
    }
  };

  render() {
    return (
      <div className='demo-app'>
        <TripForm show={this.state.showModal}
        {...this.state}
        close={this.handleCloseClick} 
        save={this.handleSaveTrip}  
        handleInputChange={this.handleInputChange} />
        <TripCard show={this.state.showCard}
        {...this.state}
        close={this.handleCloseClick}
        delete={this.handleDeleteClick}
        save={this.handleUpdateClick} />
        <div className='demo-app-top my-5'>
          <button onClick={this.toggleWeekends} className="btn btn-info">toggle weekends</button>&nbsp;
          <button onClick={this.gotoPast} className="btn btn-dark">go to a date in the past</button>&nbsp;
          (also, click a date/time to add an event)
        </div>
        <div className="demo-app-calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.eventSources}
            dateClick={this.handleDateClick}
            eventClick={this.handleEventClick}
            getId={this.handleId}
          />
        </div>
      </div>
    );
  }
}
