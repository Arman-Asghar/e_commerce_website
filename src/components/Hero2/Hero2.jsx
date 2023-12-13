import React from "react";
import "./Hero2.css"
import { Link } from "react-router-dom";

const Hero2 = () => {
  const images = [
    {
      image:
        "https://i.dummyjson.com/data/products/9/3.png",
    },
    {
      image:
        "https://i.dummyjson.com/data/products/2/2.jpg",
    },
    {
      image:
        "https://i.dummyjson.com/data/products/7/1.jpg",
    },
    {
      image:
        "https://i.dummyjson.com/data/products/8/1.jpg",
    },
  ];

  return (
    <>
      <div className="container py-4">
        <div className="text-center">
          <p className="fw-bold font" style={{ fontSize: "25px" }}>
            {" "}
            Household Electronics
          </p>
          <h4
            className="font"
            style={{ color: "brown", fontSize: "14px", fontWeight: "bold" }}
          >
            FOLLOW US
          </h4>
        </div>
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
              <div className="card newscard">
                <img style={{height: "240px"}}
                  src={image.image}
                  alt=""
                  className="image-fluid rotating-image" // Add a class for animation
                />
              </div>
              <div className="newdiv py-3">
                <Link
                  className="newlink fw-normal"
                  style={{ color: "#3c3c3c" }}
                >
                  Explore More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero2;

