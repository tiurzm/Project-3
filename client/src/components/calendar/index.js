import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import TripForm from 'components/FormModal'
import './main.scss' 
import Axios from '../../utils/API'



export default class DemoApp extends React.Component {
    calendarComponentRef = React.createRef()
        state = {
        calendarWeekends: true,
        eventSources: [
          {
              url: '/api/calendar/populated/:id',
              type: 'GET',
              failure: function () {
                  alert('There was an error while fetching trips.');
              }
          }
      ],
      title: "",
      start: new Date(),
      end: new Date(),
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

    handleSaveTrip =() => {
      Axios.saveTrip(this.state)
      .then(
        console.log("saved trip"),
        this.setState({showModal: false
        })
      )
    .catch(err => console.log(err));
    }

  render() {
    return (
      <div className='demo-app'>
        <TripForm show={this.state.showModal} close={this.handleCloseClick} save={this.handleSaveTrip} handleInputChange={this.handleInputChange}/>
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
