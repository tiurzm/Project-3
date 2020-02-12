import React from "react";
import "./style.css"

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
}
  
function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
}

class Navbar extends React.Component {
    state = {
        isTop: true,
        isLoggedin: false,
      };

      handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    
      handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }
      
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
    if(this.state.isTop) {
        navbar += " navbar-dark bg-transparent"
    } else {
        navbar += " navbar-light bg-white"
    }

    let style = "btn pl-0 px-lg-3";
    if(!this.state.isTop) {
        style += " text-dark"
    } else {
        style += " text-white"
    }

    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    
    return (
        <>
            <nav className={navbar} >
                <a className="navbar-brand" href="/">GroupAway</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/register">Register<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active" data-toggle="modal" data-target="#loginModal">
                            <button type="button" 
                            className={style} 
                            isLoggedIn={isLoggedIn}>{button}
                            </button>
                            {/* condition renderin one line if statement */}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
    }
}

export default Navbar;