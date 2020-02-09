import React from "react";
import { Container, Row, Col } from "../components/Grid";
import { CreateUser} from "../components/Form";
import API from "../utils/API"

function Register() {
    return (
        <Container>
             <Row>
                <Col size="md-6 sm-12">
                    <CreateUser />
                </Col>
                <Col size="md-6 sm-12">
                    <h1>Let's Join Our App</h1>
                </Col>
            </Row>
        </Container>
    )
}
export default Register;