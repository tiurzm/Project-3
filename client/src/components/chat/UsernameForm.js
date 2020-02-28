import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import "./UsernameForm.css";

class UsernameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.username)
  }

  onChange(e) {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
      <Container fluid id="profile" className="m-0 p-0">
      <Container className="p-5" style={{ marginTop: "50px", height: "800px"}}>
        <Row>
          <Col className="col-md-6 p-3 text-profile">
            <h2>What name do you want to use to chat?</h2>
            <h6>You will see who else is online once you're in the chat window.</h6>
            <form onSubmit={this.onSubmit}>
              <div className="form-group m-0" style={{maxWidth: "400px", width: "100%"}}>
                <input className="form-control mb-2" 
                  type="text"
                  placeholder="Your Chat Name"
                  onChange={this.onChange}
                />
                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      </Container>

    )
  }
}

export default UsernameForm;