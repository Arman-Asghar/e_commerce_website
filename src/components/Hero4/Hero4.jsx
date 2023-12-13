import React from "react";
import "./Hero4.css"

const Hero4 = () => {
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1575975243243-5462a2054ed2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1603946877690-d410437c29aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1575054092299-4a300e7a2511?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg3fHxzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
    },
    {
      image:
        "https://images.unsplash.com/photo-1601924357840-3e50ad4dd9fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWklMjBzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
    },
    {
      image:
        "https://images.unsplash.com/photo-1451859757691-f318d641ab4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFpJTIwc21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1574920162043-b872873f19c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwcG9kc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1631176093617-63490a3d785a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFpciUyMHBvZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582974114209-b508ec603c6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGFpciUyMHBvZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1613497646519-ee1ab64293af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZGZyZWV8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fHww",
    },
    {
      image:
        "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fHww",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtZXJhfGVufDB8fDB8fHww",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683141496040-eeef9702269f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <>
      <div className="container py-4">
        <div className="text-center">
          <p className="fw-bold font" style={{ fontSize: "25px" }}>
            {" "}
           Best Seller
          </p>
          <h4
            className="font"
            style={{ color: "#ba7a2d", fontSize: "14px", fontWeight: "bold" }}
          >
            Shopping Now
          </h4>
          <p className="py-2 text-secondary">
          Electronics: Precision that powers progress, innovation distilled into circuits.
          </p>
        </div>
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
              <div className="card instacard">
                <img style={{height:"240px"}} src={image.image} alt="" className=" image-fluid " />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          {" "}
          <button className="py-2 insta">Explore More</button>
        </div>
      </div>
    </>
  );
};

export default Hero4;
