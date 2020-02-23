import React from "react";
// import Calender from "../components/calendar";
import { Redirect } from "react-router"
import { Container, Row, Col } from "react-bootstrap";
// import Countdown from "../components/countdown";
import Trips from "../components/trips";
// import { DateProfileGenerator } from "@fullcalendar/core";

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldRedirectToChat: false
    }
    this.redirectToChat = this.redirectToChat.bind(this)
  }
  redirectToChat() {
    this.setState({
      shouldRedirectToChat: true
    })
  }

  render() {

    if (this.state.shouldRedirectToChat) {
      return <Redirect to="/chat"></Redirect>
    }
    else {
      return <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Row>
          <Col>
            <p>Hello {this.props.username}</p>
          </Col>
          <Col></Col>
        </Row>
        <Trips />
        <br />

        <button style={{padding: "15px", textAlign: "center", borderRadius: "12px", color: "white", backgroundColor: "#67CCD5", fontSize: "2em"}}>
          <a href="/chat" target="_">Open Chat in a New Window</a>
        </button>

      </Container>
    }
  }
}
export default Profile;
