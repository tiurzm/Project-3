import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
    state = {
        // redirect: null,
        
    }

    // getPage = () => {
    //     this.setState({
    //         redirect: "/profile"
    //     })
    // }

    render(){
        // if (this.state.redirect) {
        //     return <Redirect to={this.state.redirect} />
        // }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="emailLogin">Email</label>
                <input type="email" className="form-control" id="emailLogin"/>
                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="passwordLogin">Password</label>
                <input type="password" className="form-control" id="passwordLogin"/>
            </div>
            {/* <button type="submit" className="btn btn-primary"><a href="/profile" className="text-white">Log In</a></button> */}
            <Link to="/profile" >
                <button type="button" className="btn btn-primary">Log In</button>
            </Link>
        </form>
    )
    }
};

export default LoginForm;