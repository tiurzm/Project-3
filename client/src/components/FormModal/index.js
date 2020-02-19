import React from 'react'
import {Modal, Button} from 'react-bootstrap'


export default function FormModal(props) {
    return (
        <Modal show={props.show}>
        <Modal.Dialog>
            <Modal.Header closeButton onClick={props.close}>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form {...props}>
        <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Trip Name</label>
            <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Vacay Name"
            value={props.title}
            name="title"
            onChange={props.handleInputChange}
            />
            </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Start Date</label>
            <input 
            type="date" 
            className="form-control" 
            id="exampleFormControlInput1"
            value={props.start}
            name="start"
            onChange={props.handleInputChange}
            />
            </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlInput1">End Date</label>
            <input 
            type="date" 
            className="form-control" 
            id="exampleFormControlInput1"
            value={props.end}
            name="end"
            onChange={props.handleInputChange}
             />
            </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea 
            className="form-control" 
            id="exampleFormControlTextarea1" 
            rows="4"
            value={props.description}
            name="description"
            onChange={props.handleInputChange}
            >

            </textarea>
            </div>
        </form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.close}
                variant="secondary">Close</Button>
                <Button onClick={props.save}
                variant="primary">Save Changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </Modal>
           
    )
}