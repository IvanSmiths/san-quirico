import React from 'react';
import ImageComponent from '../ImageComponent';

function Hero() {
  return (
    <header className="home-header-cnt">
      <div className="home-header">
        <h1 className="medium-font titolo bold">
          San Quirico, il monastero del 1500.
        </h1>
      </div>
      <video className="home-header-img-cnt" autoPlay muted loop>
        <source src="/video-1.webm" type="video/webm" />
      </video>
    </header>
  );
}

export default Hero;
