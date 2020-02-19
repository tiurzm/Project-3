import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function NoMatch() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div style={{ textAlign: "center" }}>
            <h1 >404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;