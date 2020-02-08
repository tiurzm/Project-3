import React from 'react';
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import { Container } from "./components/Grid"
import Home from "./pages/Home";


function App (){
  
    return (
      <>
        <Navbar/>
        <Carousel/>
        <Container>
          <Home />
        </Container>
      </>
    );
}

export default App;
