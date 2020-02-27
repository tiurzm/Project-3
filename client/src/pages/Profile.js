import React, { Component } from "react";
import { Redirect } from "react-router"
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        <Container className="p-4" style={{marginTop: "100px", marginBottom: "100px"}}>
          <Row className="mt-5">
            <Col className="col-12 col-md-8 col-lg-9 text-justify order-2 order-md-1">
              <p>Welcome back, {this.props.username}!</p>
              <p>
                Let's get started! 
                <li>Click anywhere on the calendar and a box will open to input your trip details.</li>
                <li> If your travel companions have a GroupAway account, you can list them as Guests for a particular trip. Just choose their usernames from the dropdown menu.</li>
                <li>Explore your destination with the in-app <strong>Location</strong> feature.</li>
                <li>Use the in-app <strong>Chat</strong> to discuss your trip with friends and family.</li>
              </p>
            </Col>
            <Col className="col-12 col-md-4 col-lg-3 text-right order-1 order-md-2">
              <Link to="/location">
                <button className="btn btn-warning mr-2">
                  Location <i className="fas fa-map-pin"></i>
                </button>
              </Link>
              <button className="btn btn-success">
                <a href="/chat" target="_" className="text-white text-decoration-none">Chat <i class="far fa-comment-dots"></i></a>
              </button>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-12">
              <Calender />
            </Col>
          </Row>
        </Container>
      )
    }
  }
}

export default Profile;
