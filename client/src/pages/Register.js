import React from "react";
import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"
import { Container, Row, Col } from "../components/Grid";
import { CreateUser} from "../components/Form";


function Register() {
    return (
        <>
        <Navbar/>
        <Carousel/>
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
        </>
    )
}
export default Register;