import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import tripForm from 'components/TripForm'
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

    }
    toggleWeekends = () => {
      this.setState({ // update a property
        calendarWeekends: !this.state.calendarWeekends
      })
    }
  
    gotoPast = () => {
      let calendarApi = this.calendarComponentRef.current.getApi()
      calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
    }
  
    handleDateClick = (arg) => {
      if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        this.setState({  // add new event data
          eventSources: this.state.eventSources.concat({ // creates a new array
            url: '/api/trips',
            type: 'POST',
            error: function () {
              alert('There was an error whiled creating trip.');
          }
          })
        })
      }
    }

  render() {
    return (
      <div className='demo-app'>
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
