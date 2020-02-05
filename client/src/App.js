import React from 'react';
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"
import Container from "./components/Container"
import Home from "./pages/Home";


function App (){
  
    return (
      <>
        <Wrapper>
          <Navbar></Navbar>
        </Wrapper>
        <Container>
          <Home />
        </Container>
      </>
    );
}

export default App;
