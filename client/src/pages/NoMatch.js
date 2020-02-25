import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import lostQuote from "./img/Not_All_Who_Wander_Are_Lost.png"

function NoMatch() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div style={{ textAlign: "center" }}>
            <h1>
              <img src={lostQuote} />
            </h1>
            <h1>But ... YOU ... you're lost!</h1>
            <hr>
            </hr>
            <h2>404 — Page Not Found</h2>
              <button style={{ padding: "15px", textAlign: "center", borderRadius: "12px", color: "white", backgroundColor: "#F5C85F", fontSize: "1em" }}>
                <a href="/">Wander over to GroupAway's home page</a>
              </button>
              <br></br>
              <h6>Art by Chelsie Tamms</h6>
          </div>
        </Col>
      </Row>
    </Container>
      );
    }
    
export default NoMatch;