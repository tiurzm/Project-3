import React from "react";
import { Redirect } from "react-router"
import { Container, Row, Col } from "react-bootstrap";
// import Trips from "../components/trips";
import Calender from "../components/calendar";


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
      return <Container style={{ marginTop: "150px", marginBottom: "150px" }}>
        <Row>
          <Col className="col-md-6">
            <p>Hello {this.props.username}</p>
          </Col>
          <Col className="col-md-6 text-right">
            <button className="btn btn-info">
              <a href="/chat" target="_" className="text-white text-decoration-none">Open Chat in a New Window</a>
            </button>
          </Col>
          <Col className="col-md-12">
            <Calender />
          </Col>
        </Row>

      </Container>
    }
  }
}
export default Profile;
