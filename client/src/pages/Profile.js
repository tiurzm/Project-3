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
        <Container style={{ marginTop: "150px", marginBottom: "150px" }}>
          <Row>
            <Col className="col-md-8 text-justify">
              <p>Welcome back, {this.props.username}!</p>
              <p>
                Instructions here: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
            </Col>
            <Col className="col-md-4 text-right">
              <Link to="/location">
                <button className="btn btn-warning mr-2">
                  Location <i className="fas fa-map-pin"></i>
                </button>
              </Link>
              <button className="btn btn-success">
                <a href="/chat" target="_" className="text-white text-decoration-none">Chat <i class="far fa-comment-dots"></i></a>
              </button>
            </Col>
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
