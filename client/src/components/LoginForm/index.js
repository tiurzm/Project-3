import React from "react";
import { Link } from "react-router-dom";

function LoginForm(props) {
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
            {/* <Link to="/profile">
                <button type="button" className="btn btn-primary">Log In</button>
            </Link> */}
        </form>
    )
};

export default LoginForm;