import React, { Component }  from "react";
import Calendar from "../components/calendar";
import { Container, Row, Col } from "../components/Grid";
// import Navbar from "../components/Navbar";
import UsernameForm from './components/chat/UsernameForm'
import ChatScreen from '../ChatScreen'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
          currentUsername: '',
          currentScreen: 'WhatIsYourUsernameScreen'
        }
        this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
      }
      onUsernameSubmitted(username) {
        fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username }),
        })
          .then(response => {
            this.setState({
              currentUsername: username,
              currentScreen: 'ChatScreen'
            })
          })
          .catch(error => console.error('error', error))
      }
    
    render() {
    if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    }
    if (this.state.currentScreen === 'ChatScreen') {
      return <ChatScreen currentUsername={this.state.currentUsername} />
    }

    return(
        <>
        {/* <Navbar/> */}
        <Container>
            <Row>
                <Col size="md-6">
                    <p>User information 1</p>
                </Col>
                <Col size="md-6">
                    <p>User information 2</p>

                </Col>
            </Row>
            <Calendar/>
        </Container>
        </>
    );

    }
}
export default Profile;