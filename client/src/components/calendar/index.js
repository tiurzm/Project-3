import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import TripForm from 'components/FormModal'
import './main.scss' 

// const mongoose = require("mongoose")
// const db = require("./models");
// const trips = [];


export default class DemoApp extends React.Component {
    calendarComponentRef = React.createRef()
        state = {
        calendarWeekends: true,
        eventSources: [
          {
              url: '/api/trips/:user_id?',
              type: 'GET',
              error: function () {
                  alert('There was an error while fetching trips.');
              }
          }
      ],
      title: "",
      startDate: new Date(),
      endDate: new Date(),
      description: "",
      showModal: false,

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
      this.setState({ // update a property
        calendarWeekends: !this.state.calendarWeekends
      })
    }
  
    gotoPast = () => {
      let calendarApi = this.calendarComponentRef.current.getApi()
      calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
    }

    handleCloseClick = () => {
      this.setState({
        showModal: false
      })
    }
  
    handleDateClick = (arg) => {
      this.setState({
        startDate: new Date(arg.date),
        showModal: true
      })
    }

  render() {
    return (
      <div className='demo-app'>
        <TripForm show={this.state.showModal} close= {this.handleCloseClick}/>
        <div className='demo-app-top my-5'>
          <button onClick={ this.toggleWeekends } className="btn btn-info">toggle weekends</button>&nbsp;
          <button onClick={ this.gotoPast } className="btn btn-dark">go to a date in the past</button>&nbsp;
          (also, click a date/time to add an event)
        </div>
        <div className='demo-app-calendar'>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
            ref={ this.calendarComponentRef }
            weekends={ this.state.calendarWeekends }
            events={ this.state.eventSources }
            dateClick={ this.handleDateClick }
            />
          
        </div>
      </div>
    )
  }

}
