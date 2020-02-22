import React from "react";
import Calender from "../components/calendar";
import { Container, Row, Col } from "react-bootstrap";
import Countdown from "../components/countdown";
import Trips from "../components/trips";

// import background from "./img/bc.jpeg";

function Profile(props) {
  return (
    <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
      {/* backgroundImage: `url(${background})` */}
      <Row>
        <Col>
          <p>Hello {props.username}</p>
        </Col>
        <Col></Col>
      </Row>
      <Trips>
        <Calender />
      </Trips>
      <Countdown/>
    </Container>
  );
}
export default Profile;
