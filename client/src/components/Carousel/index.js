import React from "react";
import "./style.css"
import logo1 from './img/cn.jpeg';
import logo2 from './img/mrn.jpeg';
import logo3 from './img/mn.jpeg';


function Carousel(props) {
  return (
    <>
      <div id="carouselWrapperFade" className="carousel slide carousel-fade" data-ride="carousel" {...props}>
        {props.children}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={logo1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Grand Canyon</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={logo2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={logo3} className="d-block w-100" alt="..." />
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
