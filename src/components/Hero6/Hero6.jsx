import React from "react";
import "./Hero6.css";
import Hero6items from "./Hero6items";


const Hero6 = () => {
  const hero6 = [
    {
      title: "iPhone Collection",
      description:
        "iPhones redefine the pinnacle of mobile technology, seamlessly blending cutting-edge innovation with sleek design.",
      image:
        "https://images.unsplash.com/photo-1591815302525-756a9bcc3425?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Apple enthusiast",
      description:
        "iPhones are the pinnacle of mobile technology, perfectly combining cutting-edge innovation with beautiful design.",
      image:
        "https://images.unsplash.com/photo-1611648694964-a4cbd6ab1c70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Apple AirPods",
      description:
        "Apple AirPods epitomize wireless audio sophistication, delivering a seamless blend of crystal-clear sound and effortless connectivity.",
      image:
        "https://images.unsplash.com/photo-1593442607435-e4e34991b210?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBwbGUlMjBoZWFkcGhvbmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Samsung S23 Ultra",
      description:
        "The Samsung Galaxy S23 Ultra: Where innovation meets sophistication, high-performance features, and redefining the pinnacle of mobile excellence.",
      image:
        "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNhbXN1bmclMjBnYWxheHklMjBzMjMlMjB1bHRyYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Xbox Series X",
      description:
        "Xbox: Unleash the thrill of gaming with cutting-edge technology and immersive experiences, where every moment becomes legendary.",
      image:
        "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGh1YXdlaSUyMHAzMCUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "iPhone 15 Pro Max",
      description:
        "The iPhone 15 Pro Max stands at the forefront of innovation, seamlessly integrating cutting-edge features for an unparalleled user experience.",
      image:
        "https://images.unsplash.com/photo-1695822822491-d92cee704368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aVBob25lJTIwMTUlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="container-fluid cont-fluid ">
      <div className="container py-5">
        <h2 className="text-center fw-bold pt-4 fs-4 with-lines font">FEATURED ON ELLA</h2>
        <h4 className=" text-center font" style={{color: "#ba7a2d",
    fontSize: "16px",fontWeight:"bold"}}>VIEW ALL</h4>
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {hero6.map((feature, index) => (
            <Hero6items
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero6;

