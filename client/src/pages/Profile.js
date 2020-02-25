import React from "react";
import { Redirect } from "react-router"
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Trips from "../components/trips";
import Calender from "../components/calendar";


function Profile(props) {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     shouldRedirectToChat: false
  //   }
  //   this.redirectToChat = this.redirectToChat.bind(this)
  // }
  // redirectToChat() {
  //   this.setState({
  //     shouldRedirectToChat: true
  //   })
  // }

  // render() {

  // if (this.state.shouldRedirectToChat) {
  //   return <Redirect to="/chat"></Redirect>
  // }
  // else {
  return (
    <Container style={{ marginTop: "150px", marginBottom: "150px" }}>
      <Row>
        <Col className="col-md-6">
          <p>Hello {props.username}</p>
        </Col>
        <Col className="col-md-6 text-right">
          <Link to="/location">
            <button className="btn btn-warning mr-2">
              Location <i class="fas fa-map-pin"></i>
            </button>
          </Link>
          <Link to="/chat">
            <button className="btn btn-success">Chat <i class="far fa-comment-dots"></i>
              {/* <a href="/chat" target="_" className="text-white text-decoration-none">Chat <i class="far fa-comment-dots"></i></a> */}
            </button>
          </Link>

        </Col>
        <Col className="col-md-12">
          <Calender />
        </Col>
      </Row>

    </Container>
  )
}
// }
export default Profile;
