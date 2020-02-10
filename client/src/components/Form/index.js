import React from "react";
import "./style.css"

export function LoginForm(props) {
    return (
        <form {...props}>
            <div className="form-group">
                <label htmlFor="emailLogin">Email</label>
                <input type="emailLogin" className="form-control" id="emailLogin" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="passwordLogin">Password</label>
                <input type="passwordLogin" className="form-control" id="passwordLogin" />
            </div>
            <button type="submit" className="btn btn-primary"><a href="/profile" style= {{color: "white", textDecoration: "none"}}>Log In</a></button>
        </form>
    )
};

export function CreateUser(props) {
    return (
        <form {...props}>
            <div className="form-group">
                <label htmlFor="first">First Name</label>
                <input type="first" className="form-control" id="first" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="last">Last Name</label>
                <input type="last" className="form-control" id="last" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="username" className="form-control" id="username" />
            </div>
            <div className="form-group">
                <label htmlFor="emailNewUser">Email</label>
                <input type="emailNewUser" className="form-control" id="emailNewUser" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="passwordNewUser">Password</label>
                <input type="passwordNewUser" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary"><a href="/confirm" className="submit">Register</a></button>
        </form>
    )
};

