import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//       </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//       </button>
//   );
// }

class Navbar extends React.Component {
  state = {
    isTop: true
    // ,
    // isLoggedin: false,
  };

  // handleLoginClick() {
  //   this.setState({ isLoggedIn: true });
  // }

  // handleLogoutClick() {
  //   this.setState({ isLoggedIn: false });
  // }

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

    // const isLoggedIn = this.state.isLoggedIn;
    // let button;

    // if (isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLogoutClick} />;
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />;
    // }

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
            <li className="nav-item">
              <Link to="/register"
                className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}>
                Register
                </Link>
            </li>
            <li className="nav-item" >
              <a className="nav-link pointer" data-toggle="modal" data-target="#loginModal">Log In</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;