import React from "react";
import { Container, Row, Col } from "../components/Grid";
import { LoginForm } from "../components/Form";
import API from "../utils/API";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: "",
        password: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleInputChange(event) {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let req = {
        username: this.state.username,
        password: this.state.password
    }
    API.login(req)

  }
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6 sm-12">
            <h1>Log In</h1>
          </Col>
          <Col size="md-6 sm-12">
            <LoginForm
              loginHandler={this.handleFormSubmit}
              inputChange={this.handleInputChange}
              userValue = {this.state.user}
              passwordValue = {this.state.password}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Login;
