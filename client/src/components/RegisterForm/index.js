import React from "react";
import { Link } from "react-router-dom";

function CreateUser(props) {
    return (
        <form {...props}>
            <div className="form-group">
                <label htmlFor="first">First Name</label>
                <input type="text" className="form-control" id="first"/>
            </div>
            <div className="form-group">
                <label htmlFor="last">Last Name</label>
                <input type="text" className="form-control" id="last"/>
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="username" className="form-control" id="username"/>
            </div>
            <div className="form-group">
                <label htmlFor="emailNewUser">Email</label>
                <input type="email" className="form-control" id="emailNewUser"/>
            </div>
            <div className="form-group">
                <label htmlFor="passwordNewUser">Password</label>
                <input type="password" className="form-control" id="passwordNewUser" />
            </div>
            <Link to="/confirm">
                <button type="submit" className="btn btn-primary">Register</button>
            </Link >
        </form>
    )
};
export default CreateUser;

