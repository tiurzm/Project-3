import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

class Navbar extends React.Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 30;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }

  render() {

    let navbar = "navbar navbar-expand-lg fixed-top py-0";
    if (this.state.isTop) {
      navbar += " navbar-dark bg-transparent"
    } else {
      navbar += " navbar-light bg-white"
    }

    if (this.props.isLoggedIn === false) {
      return (
        <nav className={navbar} >
          <Link className="navbar-brand" to="/">
            GroupAway
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" >
                <Link to="/register"
                  className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}>
                  <i className="fas fa-user-plus"></i> Register
              </Link>
              </li>
              <li className="nav-item" >
                <a className="nav-link" data-toggle="modal" data-target="#loginModal" href="#">
                  <i className="fas fa-sign-in-alt"></i> Log In</a>
              </li>
            </ul>
          </div>
        </nav>
      );

    } else {
      return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-white bg-white py-0">
          <Link className="navbar-brand text-body" to="/profile">
            GroupAway
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="text-body" onClick={this.props.logOut}>Log Out</Link>
              </li>
            </ul>
          </div>
        </nav>
      )
    }
  }
}

export default Navbar;