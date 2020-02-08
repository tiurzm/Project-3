import React from "react";

export function LoginForm(props) {
    return (
        <form {...props}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">Log In</button>
        </form>
    )
};

export function CreateUser(props) {
    return (
        <form {...props}>
            <div className="form-group">
                <label htmlFor="first">First Name</label>
                <input type="first" className="form-control" id="first" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="last">Last Name</label>
                <input type="last" className="form-control" id="last" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="username" className="form-control" id="username" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" />
            </div>
            <div className="form-group">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="confirm" className="form-control" id="confirm" />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    )
};

