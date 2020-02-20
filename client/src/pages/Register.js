import React from "react";
import Carousel from "../components/Carousel";
import { Container, Row, Col } from 'react-bootstrap';
import CreateUser from "../components/RegisterForm";

function Register() {
    return (
        <>
        <Carousel/>
        <Container className="my-5">
             <Row>
                <Col data-aos="fade-zoom-in">
                    <CreateUser/>
                </Col>
                <Col data-aos="fade-zoom-in">
                    <h1 style={{textAlign:"center", paddingTop: "100px",}}>Join GroupAway to get started!</h1>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Register;