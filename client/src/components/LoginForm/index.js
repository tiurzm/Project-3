import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginForm extends Component {
    state = {
        username: "",
        password: "",
        errorUsername: "",
        errorPassword: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
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
        } else {
            this.setState ({
                errorUsername: "*Please fill out your username",
                errorPassword: "*Please fill out your password"
            })
        }

    };

    render() {

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
                    <p style={{color: "red", fontSize: "15px"}}>{this.state.errorUsername}</p>
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
                    <p style={{color: "red", fontSize: "15px"}}>{this.state.errorPassword}</p>
                </div>
                <button type="button" onClick={this.handleFormSubmit}
                    className="btn btn-primary"
                    > Log In
                </button>
            </form>
        )
    }
};

export default LoginForm;