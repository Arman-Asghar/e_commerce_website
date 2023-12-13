import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <span className="fw-bold heroh1 py-2">Shopping Enthusiast</span>
        <p className="pt-4" style={{color:"white"}}>
        An website serves as an online hub for enthusiasts, hobbyists, and consumers seeking the latest and most innovative electronic devices and components. Featuring a diverse array of products, ranging from cutting-edge smartphones and laptops to specialized electronic components and accessories, these websites provide a one-stop destination for individuals looking to explore, compare, and purchase electronics. Navigating such a platform typically involves intuitive user interfaces, categorization, and search functionalities, enabling users to easily locate desired items. Comprehensive product descriptions, specifications, and customer reviews contribute to informed decision-making.</p>
        <button className="py-2 insta">SHOP NOW</button>
      </div>
    </div>
  );
};  

export default Hero;
