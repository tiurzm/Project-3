import React from 'react';
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import { Container } from "./components/Grid"
import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import "./App.css"



function App (){
  
    return (
      <Container fluid>
        <Navbar/>
        <Carousel/>
        <Home />
        {/* <Profile/> */}
      </Container>
    );
}

export default App;
