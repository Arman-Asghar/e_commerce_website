import React from 'react';
import "./Hero6.css";

const Hero6items = ({ title, description, image }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="card card1 border-0 shadow-none">
      <img style={{height:"240px"}} src={image} className="image-fluid Fimg" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center fw-bold">{title}</h5>
        <p className="card-text text-center text">{description}</p>
      </div>
      <div className="text-center">
        <button className="py-2 insta">SHOP NOW</button>
      </div>
    </div>
  </div>
  )
}

export default Hero6items;