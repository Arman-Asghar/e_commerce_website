import React from "react";
import "./home.css" // Import your CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to [Your E-Commerce Brand]</h1>
          <p>Discover the Latest Trends and Exclusive Deals</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        {/* Display your featured products here */}
        <div className="product-card">
          <img src="product1.jpg" alt="Product 1" />
          <h3>Product Title</h3>
          <p>Product description goes here.</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>

        {/* Repeat the product cards for other featured products */}
      </section>

      <section className="popular-categories">
        <h2>Popular Categories</h2>
        {/* Display popular categories with images and links */}
        <div className="category-card">
          <img src="category1.jpg" alt="Category 1" />
          <h3>Category Title</h3>
          <a href="/category1">Explore Now</a>
        </div>

        {/* Repeat the category cards for other popular categories */}
      </section>
    </div>
  );
};

export default Home;