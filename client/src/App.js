import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "./components/Grid";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Modal from "./components/Modal";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar"
import Confirm from "./pages/Confirm";

function App (){
  
    return (
      <Router>
      <Container fluid>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/confirm" component={Confirm}/>
        </Switch>
        <Modal/>
      </Container>
      </Router>

    );
}

export default App;
