import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./style.css"


export default function TripCard(props) {
    console.log(props)
    return (
        <Modal show={props.show} id="trip">
        <Modal.Dialog>
            <Modal.Header closeButton onClick={props.close}>
            </Modal.Header>
            <Modal.Body>
            <div className="card" {...props}>
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
                </div>
            </Modal.Body>
        </Modal.Dialog>
        </Modal>
    )
}