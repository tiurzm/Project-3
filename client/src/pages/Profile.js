import React, { Component } from "react";
import { Redirect } from "react-router"
import { Container, Row, Col } from "react-bootstrap";
import Calender from "../components/calendar";


class Profile extends Component {
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
      return (
        <Container fluid id="profile" className="m-0 p-0">
          <Container className="px-5" style={{ marginTop: "50px", paddingTop: "50px", paddingBottom: "100px"}} >
            <Row className="text-justify">
              <Col className="col-md-6 p-4 text-profile">
                <p>Welcome back, {this.props.username}!</p>
                <p>
                  Let's get started!
                <li>Click anywhere on the calendar and a box will open to input your trip details.</li>
                  <li> If your travel companions have a GroupAway account, you can list them as Guests for a particular trip. Just choose their usernames from the dropdown menu.</li>
                  <li>Explore your destination with the in-app <strong>Location</strong> feature.</li>
                  <li>Use the in-app <strong>Chat</strong> to discuss your trip with friends and family.</li>
                </p>
              </Col>
              {/* <button className="btn btn-success">
                <a href="/chat" target="_" className="text-white text-decoration-none">Chat <i className="far fa-comment-dots"></i></a>
              </button> */}
            </Row>
            <Row className="my-5" id="calendar-profile">
              <Col className="col-md-12 p-4">
                <Calender />
              </Col>
            </Row>
          </Container>
        </Container>
      )
    }
  }
}

export default Profile;
