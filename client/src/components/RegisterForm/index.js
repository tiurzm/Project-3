import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateUser extends Component {
    state = {
        username: "",
        password: "",
        passwordConfirm: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
           [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password && this.state.passwordConfirm) {
           if (this.state.password === this.state.passwordConfirm) {
  
              fetch("/auth/signup", {
                 method: "POST",
                 credentials: "include",
                 mode: "cors",
                 body: JSON.stringify({
                    password: this.state.password,
                    username: this.state.username
                 }),
                 headers: new Headers({
                    "Content-Type": "application/json"
                 })
              })
                 .then(response => {
                    console.log(response);
                    window.location.href = "/";
                 })
                 .catch(err => console.log(err));
  
              this.setState({
                 username: "",
                 password: "",
                 passwordConfirm: ""
              });
           } else {
              console.log("Make sure your passwords match.")
           }
        } else {
           console.log("Fill out all fields.")
        }
    };

    render(){
    return (
        <form>
            {/* <div className="form-group">
                <label htmlFor="first">First Name</label>
                <input type="text" className="form-control" id="first"/>
            </div>
            <div className="form-group">
                <label htmlFor="last">Last Name</label>
                <input type="text" className="form-control" id="last"/>
            </div> */}
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  name="username"
                  placeholder="Username"
                  type="text"
               />
            </div>
            {/* <div className="form-group">
                <label htmlFor="emailNewUser">Email</label>
                <input type="email" className="form-control" id="emailNewUser"/>
            </div> */}
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password"
                  type="password"
               />
            </div>
            <div className="form-group">
                <label htmlFor="passwordConfirm">Password</label>
                <input
                  value={this.state.passwordConfirm}
                  onChange={this.handleInputChange}
                  name="passwordConfirm"
                  placeholder="Confirm password"
                  type="password"
               />
            </div>
            {/* <Link to="/confirm"> */}
                <button onClick={this.handleFormSubmit}>
                  Sign Up
               </button>
            {/* </Link > */}
        </form>
    )
    }
};
export default CreateUser;

