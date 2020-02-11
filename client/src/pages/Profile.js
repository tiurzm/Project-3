import React from "react";
import Calender from "../components/calendar";
import { Container, Row, Col } from "../components/Grid";


function Profile () {
    return(
        <Container>
            <Row>
                <Col size="md-6">
                    <p>User information 1</p>
                </Col>
                <Col size="md-6">
                    <p>User information 2</p>

                </Col>
            </Row>
            <Calender/>
        </Container>
    );
}
export default Profile;