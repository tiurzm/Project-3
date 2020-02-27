import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Map from "../components/GoogleMaps";

function Location() {
    const googleKey = process.env.REACT_APP_GOOGLE_KEY
    return (
        <Container fluid id="profile" className="m-0 p-0">
            <Container className="px-5 mx-auto" style={{ marginTop: "50px", paddingTop: "50px", paddingBottom: "150px"}}>
                <Row className="text-justify mb-5">
                    <Col className="col-md-12 p-3 text-profile">
                        <p className="m-0 p-0">
                            Enter your destination in the box below the map. Choose "Map" or "Satellite" view (buttons top left of map). Display "Full Screen" (button top right of map). Happy exploring!
                        </p>
                    </Col>
                    {/* <Col className="col-12 col-md-4 col-lg-3 text-right order-1 mb-3 order-md-2">
                    <Link to="/profile">
                        <button className="btn btn-info mb-2 ">
                            Back to Calendar <i className="far fa-calendar-alt"></i>
                        </button>
                    </Link>
                </Col> */}
                </Row>
                <Row className="mx-0">
                    <Col data-aos="fade-up" className="col-md-12 p-0">
                        <div style={{ width: '73vw', height: '85vh' }}>
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
        </Container>

    )

}

export default Location;