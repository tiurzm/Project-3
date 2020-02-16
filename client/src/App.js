import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Modal from "./components/Modal";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar"
import Confirm from "./pages/Confirm";
import Chat from "./pages/Chat";
import NoMatch from "./pages/NoMatch";
import "./App.css";


function App (){
  
    return (
      <Router>
      <Container fluid className="p-0">
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/confirm" component={Confirm}/>
          <Route exact path="/chat" component={Chat}/>
          <Route component={NoMatch} />
        </Switch>
        <Modal/>
      </Container>
      </Router>

    );
}

export default App;
