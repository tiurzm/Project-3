import React from "react";
import Calender from "../components/calendar";
import { Container, Row, Col } from "../components/Grid";


function Profile () {
    return(
        <Container>
            <Row>
                <Col size="md-6">
                    <h1>User information 1</h1>
                </Col>
                <Col size="md-6">
                    <h1>User information 2</h1>

                </Col>
            </Row>
            <Calender/>
        </Container>
    );
}
export default Profile;