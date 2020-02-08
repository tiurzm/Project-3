import React from "react";
import { Container, Row, Col } from "../components/Grid";
import { LoginForm } from "../components/Form";

function Login() {
    return (
        <Container>
            <Row>
                <Col size="md-6 sm-12">
                    <h1>Log In</h1>
                </Col>
                <Col size="md-6 sm-12">
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Login;

