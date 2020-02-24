import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./style.css"


class TripCard extends Component {
    constructor(props) {
        super(props);
      }
    render(){
    return (
        <Modal show={this.props.show} id="trip">
        <Modal.Dialog>
            <Modal.Header closeButton onClick={this.props.close}>
                Trip's Information
            </Modal.Header>
            <Modal.Body>
                <Button onClick={this.props.delete}
                variant="danger"
                >
                    Delete
                </Button>
            {/* <div className="card" {...props}>
                <h5 className="card-header">Trip</h5>
                <div className="card-body">
                    <h5 className="card-title">
                        {props.title}
                    </h5>
                    <p className="card-text">
                        <div>
                            {props.start}
                        </div>
                        <div>
                            {props.end}
                        </div>
                        <div>
                            {props.description}
                        </div>
                    </p>
                    <Button onClick={props.delete}
                        variant="danger">Delete</Button>
                </div>
                </div> */}
            </Modal.Body>
        </Modal.Dialog>
        </Modal>
    )
    }
}

export default TripCard;