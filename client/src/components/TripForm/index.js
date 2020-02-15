import React from "react";

export function CreateUser(props) {
    return (
    <form {...props}>
        <div className="form-group">
            <label for="exampleFormControlInput1">Trip Name</label>
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
            <label for="exampleFormControlInput1">Start Date</label>
            <input 
            type="date" 
            className="form-control" 
            id="exampleFormControlInput1"
            value={props.startDate}
            name="startDate"
            onChange={props.handleInputChange}
            />
            </div>
        <div className="form-group">
            <label for="exampleFormControlInput1">End Date</label>
            <input 
            type="date" 
            className="form-control" 
            id="exampleFormControlInput1"
            value={props.endDate}
            name="endDate"
            onChange={props.handleInputChange}
             />
            </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
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
        <button type="submit" class="btn btn-primary mb-2">Add Trip</button>
        </form>
)
};