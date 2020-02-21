import React, { Component, createRef } from "react";
import { Redirect } from "react-router"
import "./style.css"

class CreateUser extends Component {
constructor(props) {
   super(props);
   this.form = createRef();
}

   state = {
      username: "",
      password: "",
      passwordConfirm: "",
      errorUsername: "",
      errorPassword: "",
      errorConfirm: "",
      toConfirm: false
   }

   componentDidMount() {
      this.form.current.scrollIntoView({ behavior: 'smooth' });
   }

   handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
         [name]: value
      });
   };

   handleFormSubmit = event => {
      event.preventDefault();
      if (!(this.state.username && this.state.password && this.state.passwordConfirm)) {
         this.setState({
            errorUsername: "*Please fill out your username",
            errorPassword: "*Please fill out your password",
            errorConfirm: "*Please confirm your password"
         });
      } else if (this.state.password.length < 6) {
         this.setState({
            errorUsername: "",
            errorPassword: "*Password should be at least 6 characters long",
            errorConfirm: ""
         });
      } else if (this.state.password !== this.state.passwordConfirm) {
         this.setState({
            errorUsername: "",
            errorPassword: "*Make sure your passwords match",
            errorConfirm: ""
         });
      } else {
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
            .then(() => {
               this.setState({
                  toConfirm: true
               })
            })
            .catch(err => console.log(err));

         this.setState({
            username: "",
            password: "",
            passwordConfirm: "",
            errorUsername: "",
            errorPassword: "",
            errorConfirm: ""
         });
      }
   };

   
   render() {
      if(this.state.toConfirm) {
         return <Redirect to="/confirm"></Redirect>
      }
      return (
         <form ref={this.form}>
            <div className="form-group">
               <label htmlFor="username">Username</label>
               <input className="form-control"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  name="username"
                  placeholder="Username"
                  type="text"
               />
               <p className="error">{this.state.errorUsername}</p>
            </div>
            <div className="form-group">
               <label htmlFor="password">Password</label>
               <input className="form-control"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password"
                  type="password"
               />
               <p className="error">{this.state.errorPassword}</p>
            </div>
            <div className="form-group">
               <label htmlFor="passwordConfirm">Confirm Password</label>
               <input className="form-control"
                  value={this.state.passwordConfirm}
                  onChange={this.handleInputChange}
                  name="passwordConfirm"
                  placeholder="Confirm password"
                  type="password"
               />
               <p className="error">{this.state.errorConfirm}</p>
            </div>
            <button className="btn btn-primary" onClick={this.handleFormSubmit}>
               Sign Up
               </button>
         </form>
      )
   }
};
export default CreateUser;

