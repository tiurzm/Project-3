import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./style.css";

export default function FormModal(props) {
  function userDropdowns(users) {
    const mappedUsers = users.map(user => {
      return (
          <li className="dropdown-item">{user.username}</li>
      );
    });

    console.log('mappedUsers: ', mappedUsers)

    return mappedUsers;
  }

  return (
    <Modal show={props.show} id="trip">
      <Modal.Dialog>
        <Modal.Header closeButton onClick={props.close}>
          <Modal.Title>New Trip</Modal.Title>
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

            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Guests
              </button>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {userDropdowns(props.users)}
              </div>

              {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> */}
              {/* <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a> */}
              {/* </div> */}
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
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
