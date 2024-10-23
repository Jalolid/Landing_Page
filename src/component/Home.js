import React from 'react';
import '../style/Home.css'; // Home sahifasi uchun CSS fayl

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Our Website</h1>
        <p>
          We are excited to have you here. Explore our website to find the best resources, connect with others, and stay updated with the latest trends!
        </p>
        <a href="#learn-more" className="home-btn">Learn More</a>
      </div>
    </div>
  );
}

export default Home;
