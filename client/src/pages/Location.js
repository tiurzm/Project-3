import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Map from "../components/GoogleMaps";
import { Link } from "react-router-dom";


function Location() {
    const googleKey = process.env.REACT_APP_GOOGLE_KEY
    return (
        <Container style={{ marginTop: "150px", marginBottom: "150px"}}>
            <Row>
            <p>
                Enter your destination in the box below the map. <br />
                Choose "Map" or "Satellite" view (buttons top left of map). Display "Full Screen" (button top right of map).
                <br /> Happy exploring!
              </p>
                <Col className="col-md-12">
                    <Link to="/profile">
                        <button className="btn btn-info mb-2 ">
                            Back to Calendar <i className="far fa-calendar-alt"></i>
                        </button>
                    </Link>
                </Col>
                <Col data-aos="fade-up" className="mb-5 mx-auto col-md-12">
                    <div style={{ width: '76.5vw', height: '85vh'}}>
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