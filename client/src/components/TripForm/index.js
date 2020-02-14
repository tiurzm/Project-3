import React from "react";

export function CreateUser(props) {
    return (
    <form {...props}>
        <div className="form-group">
            <label for="exampleFormControlInput1">Trip Name</label>
            <input type="title" className="form-control" id="exampleFormControlInput1" placeholder="Vacay Name"/>
            </div>
        <div className="form-group">
            <label for="exampleFormControlInput1">Start Date</label>
            <input type="date" className="form-control" id="exampleFormControlInput1"/>
            </div>
        <div className="form-group">
            <label for="exampleFormControlInput1">End Date</label>
            <input type="date" className="form-control" id="exampleFormControlInput1" />
            </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
        <button type="submit" class="btn btn-primary mb-2">Add Trip</button>
        </form>
)
};