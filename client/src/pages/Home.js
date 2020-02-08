import React from "react";
import { LoginForm, CreateUser} from "../components/Form"
import { Container, Row, Col } from "../components/Grid"

function Home() {
    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <h1>Our App</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem nulla, pharetra et turpis id, efficitur euismod neque. Suspendisse semper cursus molestie. Ut ac maximus nunc, mollis pellentesque risus. Phasellus dignissim hendrerit volutpat. Vestibulum tempor, dui at laoreet scelerisque, metus neque venenatis ipsum, ac lobortis tellus odio ac nulla. Ut vitae euismod massa, ac congue justo. Etiam tincidunt lectus ut odio posuere, id suscipit odio mattis. Pellentesque ullamcorper, quam eget malesuada gravida, nibh enim pretium leo, ut pharetra magna nulla faucibus tortor. Pellentesque nibh velit, malesuada a nibh non, aliquet maximus orci. Integer tempus nisi a magna ornare imperdiet. Sed et tempus quam, at accumsan lacus. Aenean elementum eleifend magna, vitae dignissim dui mollis in. Proin ut massa purus.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col size="md-6 sm-12">
                    <h1>Log In</h1>
                </Col>
                <Col size="md-6 sm-12">
                    <LoginForm/>
                </Col>
            </Row>
            <Row>
                <Col size="md-6 sm-12">
                    <CreateUser/>
                </Col>
                <Col size="md-6 sm-12">
                    <h1>Let's Join Our App</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;