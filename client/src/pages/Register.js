import React from "react";
import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"
import { Container, Row, Col } from "../components/Grid";
import CreateUser from "../components/RegisterForm";

function Register() {
    return (
        <>
        <Navbar/>
        <Carousel/>
        <Container>
             <Row>
                <Col size="md-6 sm-12" >
                    <CreateUser data-aos="fade-zoom-in"/>
                </Col>
                <Col size="md-6 sm-12">
                    <h1 data-aos="fade-zoom-in" style={{textAlign:"center", paddingTop: "100px",}}>Join GroupAway to get started!</h1>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Register;