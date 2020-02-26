import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Modal from "./components/Modal";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar"
import Location from "./pages/Location";
import Chat from "./pages/Chat";
import NoMatch from "./pages/NoMatch";
import API from "./utils/API";
import "./App.css";


class App extends Component{
  state = {
    isLoggedIn: false,
    username: ""
  }

  componentDidMount() {
    this.logIn()
  }

  logIn = () => {
    return API.getUser()
    .then(user => {
      this.setState({
        isLoggedIn: user.data.loggedIn,
        username: user.data.username
      });
    })
  }

  logOut = () => {
    API.logout()
      .then(res => {
      this.setState({
        isLoggedIn: false,
        username: ""
      });
    })
  }

  render(){  
    return (
      <Router>
      <Container fluid className="p-0">
      <Navbar logOut={this.logOut} isLoggedIn={this.state.isLoggedIn} username={this.state.username}/>
        <Switch>
          <Route exact path="/" component={Home}/>

          <Route exact path="/profile"  component={() => <Profile username={this.state.username}/>}/>

          <Route exact path="/register"
          render={(props) => <Register {...props} login={this.logIn}/>}
          />
          <Route exact path="/location" component={Location}/>
          <Route exact path="/chat" component={Chat}/>
          <Route component={NoMatch} />
        </Switch>
        <Modal login={this.logIn}/>
      </Container>
      </Router>

    );
  }
}

export default App;
