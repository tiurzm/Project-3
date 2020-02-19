import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./UsernameForm.css";

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
      <Container style={{marginTop: "100px", marginBottom: "100px"}}>
        <Row>
          <Col>
            <h2>What name do you want to use to chat?</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group" style={{maxWidth: "400px", width: "100%"}}>
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
    )
  }
}

export default UsernameForm;