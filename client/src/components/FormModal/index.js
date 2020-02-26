import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./style.css";

export default function FormModal(props) {
  function userDropdowns(users) {
    const mappedUsers = users.map(user => {
      return <option value={user._id}>{user.username}</option>;
    });

    console.log("mappedUsers: ", mappedUsers);

    return mappedUsers;
  }

  const guest = Array.isArray(props.guests) ? props.guests[0] : props.guests;

  return (
    <Modal show={props.show} id="trip">
      <Modal.Dialog>
        <Modal.Header closeButton onClick={props.close}>
          <Modal.Title>
            <i className="far fa-calendar-plus"></i> Make a New Trip
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form {...props}>
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
    <select multiple class="form-control" name="guests" onChange={props.handleInputChange}  value={guest}>
    {userDropdowns(props.users)}
    </select>
  </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Guest</label>
              <select class="form-control" name="guests" value={guest}
              onChange={props.handleInputChange}>
                {userDropdowns(props.users)}
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
          <Button onClick={props.save} variant="primary">
            Save Trip
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
