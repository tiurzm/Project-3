import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "./components/Grid";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import Register from "./pages/Register";
import Modal from "./components/Modal";
import Profile from "./pages/Profile";

function App (){
  
    return (
      <Router>
      <Container fluid>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/profile" component={Profile}/>
        </Switch>
        <Modal/>
      </Container>
      </Router>

    );
}

export default App;
