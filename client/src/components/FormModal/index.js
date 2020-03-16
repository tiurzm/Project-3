import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./style.css";

export default function FormModal(props) {
  function userDropdowns(users, guests) {
    const mappedUsers = users.map(user => {
      const selected = guests.find(guest => guest === user._id) ? true: false;
      return <option value={user._id} selected={selected}>{user.username}</option>;
    });
    return mappedUsers;
  }

  return (
    <Modal show={props.show} id="trip">
      <Modal.Dialog>
        <Modal.Header closeButton onClick={props.close}>
          <Modal.Title>
            <i className="far fa-calendar-plus"></i> Make a New Trip
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form {...props} autocomplete="off">
            <div className="form-group">
              <label htmlFor="title">Trip Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Trip Name"
                value={props.title}
                name="title"
                onChange={props.handleInputChange}
              />
              <p className="error">{props.errorTitle}</p>
            </div>

            <div class="form-group">
    <label for="exampleFormControlSelect2">Guests</label>
    <select multiple class="form-control" id="exampleFormControlSelect2" onChange={props.handleGuestsChange}>
    {userDropdowns(props.users, props.guests)}
    </select>
  </div>
     

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Location"
                value={props.location}
                name="location"
                onChange={props.handleInputChange}
              />
              <p className="error">{props.errorLocation}</p>
            </div>

            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                className="form-control"
                id="start"
                value={props.start}
                name="start"
                onChange={props.handleInputChange}
              />
              <p className="error">{props.errorStart}</p>
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                className="form-control"
                id="end"
                value={props.end}
                name="end"
                onChange={props.handleInputChange}
              />
              <p className="error">{props.errorEnd}</p>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="4"
                value={props.description}
                name="description"
                onChange={props.handleInputChange}
              ></textarea>
              <p className="error">{props.errorDescription}</p>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.close} variant="secondary">
            Close
          </Button>
          <Button onClick={props.save} variant="primary" class="newEvent">
            Save Trip
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
