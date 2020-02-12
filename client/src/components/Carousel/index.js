import React from "react";
import "./style.css"
import logo1 from './img/cn.jpeg';
import logo2 from './img/bl.jpeg';
import logo3 from './img/rc.jpeg';


function Carousel(props) {
  return (
    <>
      <div id="carouselWrapperFade" className="carousel slide carousel-fade" data-ride="carousel" {...props}>
        {props.children}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={logo1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1><a href="https://www.nps.gov/grca/index.htm">Grand Canyon</a></h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={logo2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1><a href="https://www.indonesia.travel/us/en/destinations/java/bromo-tengger-semeru-national-park/mount-bromo">Bromo</a></h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={logo3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1><a href="https://ranchosantana.com/">Rancho Santana</a></h1>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselWrapperFade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselWrapperFade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default Carousel;
