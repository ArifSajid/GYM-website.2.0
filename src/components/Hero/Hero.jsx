import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <section id='hero'>
    <div id="hero-banner">
        <div class="hero-image hero-image1"></div>
        <div class="hero-image hero-image2"></div>
        <div class="hero-image hero-image3"></div>
        <div class="hero-image hero-image4"></div>
    </div>
    <div className='hero-container'>
        <h1>Sports Clothing & <br>
        </br>Fitness Equipment <br></br>Shopify Theme</h1>
        <button className='btn'>View Shop</button>
    </div>

</section>
  );
}

export default Hero;
