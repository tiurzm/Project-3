import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Map from "../components/GoogleMaps";
import { Link } from "react-router-dom";


function Location() {
    const googleKey = process.env.REACT_APP_GOOGLE_KEY
    return (
        <Container style={{ marginTop: "150px", marginBottom: "150px" }}>
            <Row>
                <Col className="col-12 col-md-8 col-lg-9 text-justify order-2 order-md-1 ">
                    <p>
                        Enter your destination in the box below the map. <br />
                        Choose "Map" or "Satellite" view (buttons top left of map). <br/>Display "Full Screen" (button top right of map). Happy exploring!
                    </p>
                </Col>
                <Col className="col-12 col-md-4 col-lg-3 text-right order-1 mb-3 order-md-2">
                    <Link to="/profile">
                        <button className="btn btn-info mb-2 ">
                            Back to Calendar <i className="far fa-calendar-alt"></i>
                        </button>
                    </Link>
                </Col>
            </Row>
            <Row className="mx-auto p-0 my-3">
                <Col data-aos="fade-up" className="mb-5 col-md-12">
                    <div style={{ width: '76.5vw', height: '85vh' }}>
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