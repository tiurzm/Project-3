import React from "react";
import { Modal, Button } from "react-bootstrap";
import Clock from "../clock";

// import "./style.css"

export default function TripCard(props) {
  function userDropdowns(users) {
    const mappedUsers = users.map(user => {
      return <option>{user.username}</option>;
    });

    console.log("mappedUsers: ", mappedUsers);

    return mappedUsers;
  }

  console.log(props);
  return (
    <Modal show={props.show} id="trip">
      <Modal.Dialog>
        <Modal.Header closeButton onClick={props.close}>
          <Modal.Title>
            <i className="far fa-edit"></i> Edit Your Trip
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
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
              <label for="exampleFormControlSelect1">Guest</label>
              <select class="form-control" id="exampleFormControlSelect1">
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
              <p className="error">{props.errorTitle}</p>
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
          <div>
            <h4>Trip Start</h4>
            <Clock deadline={props.start} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.delete} variant="danger">
            Delete Trip
          </Button>
          <Button onClick={props.save} variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
