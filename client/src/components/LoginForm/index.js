import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginForm extends Component {
    state = {
        username: "",
        password: ""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
           [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
  
        fetch("/auth/login", {
           method: "POST",
           credentials: "include",
           mode: "cors",
           body: JSON.stringify({
              username: this.state.username,
              password: this.state.password
           }),
           headers: new Headers({
              "Content-Type": "application/json"
           })
        })
           .then(response => {
              console.log(response);
              window.location.href = "/profile";
           })
           .catch(err => {
              console.log(err);
           });
  
        this.setState({
           username: "",
           password: ""
        });
    };

    render(){

    return (
        <form>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input className="form-control"
                     value={this.state.username}
                     name="username"
                     onChange={this.handleInputChange}
                     type="text"
                     placeholder="Username"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control"
                     value={this.state.password}
                     name="password"
                     onChange={this.handleInputChange}
                     type="password"
                     placeholder="Password"
                />
            </div>
            <Link to="/profile">
                <button type="button" onClick={this.handleFormSubmit} 
                className="btn btn-primary" 
                > Log In
                </button>
            </Link>
        </form>
    )
    }
};

export default LoginForm;