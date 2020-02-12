import React from "react";
import "./style.css"

export function LoginForm(props) {
    return (
        <form {...props}>
            <div className="form-group">
                <label htmlFor="emailLogin">Email</label>
                <input type="email" className="form-control" id="emailLogin"/>
                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="passwordLogin">Password</label>
                <input type="password" className="form-control" id="passwordLogin"/>
            </div>
            <button type="submit" className="btn btn-primary"><a href="/profile" className="submit">Log In</a></button>
        </form>
    )
};

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
            <button type="submit" className="btn btn-primary"><a href="/confirm" className="submit">Register</a></button>
        </form>
    )
};
export default CreateUser;

