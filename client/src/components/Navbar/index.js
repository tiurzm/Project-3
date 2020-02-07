import React from "react";
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
    let className = "navbar navbar-expand-lg fixed-top py-0";
    if(this.state.isTop) {
        className += " navbar-dark bg-transparent"
    } else {
        className += " navbar-light bg-white"
    }
    return (
        <>
            <nav className={className}>
                <a className="navbar-brand" href="#">Groupaway</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Register<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Log In</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
    }
}

export default Navbar;