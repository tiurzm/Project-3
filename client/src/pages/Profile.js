import React from "react";
import Calender from "../components/calendar";
import { Container, Row, Col } from 'react-bootstrap';
import Countdown from "../components/countdown";
import background from "./img/bc.jpeg";


function Profile () {
    return(
        <Container style={{marginTop: "100px", marginBottom: "100px"}}>
            {/* backgroundImage: `url(${background})` */}
            <Row>
                <Col>
                    <p>User information 1</p>
                </Col>
                <Col>
                    <p>User information 2</p>

                </Col>
            </Row>
            <Calender/>
            <Countdown/>
        </Container>
    );
}
export default Profile;