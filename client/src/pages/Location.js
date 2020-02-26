import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Map from "../components/GoogleMaps";

function Location() {
    const googleKey = process.env.REACT_APP_GOOGLE_KEY
    return (
        <Container style={{marginTop: "150px", marginBottom: "150px"}}>
            <Row>
                <Col data-aos="fade-up" className="mb-5 mx-auto">
                    <div style={{ width: '80vw', height: '80vh' }}>
                        <Map
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleKey}&libraries=geometry,drawing,places`}
                            loadingElement={<div style={{ height: '100%' }} />}
                            containerElement={<div style={{ height: '100%' }} />}
                            mapElement={<div style={{ height: '100%' }} />}
                        />
                    </div>
                </Col>
            </Row>
        </Container>

    )

}

export default Location;