import React from 'react';
import ImageComponent from '../ImageComponent';

function Hero() {
  return (
    <header className="home-header-cnt flex-center">
      <h1 className="large-font bold">San Quirico</h1>
      <h2 className="small-font bold">Scopri il monastero del 1500</h2>
      {/* <ImageComponent
        src={'/main-image.jpg'}
        webp={'/main-image.webp'}
        height={'100%'}
        width={'100%'}
        alt={'immagine principale di san quirico'}
        className={'home-header-img-cnt'}
      /> */}
      <video className="home-header-img-cnt" autoPlay muted loop>
        <source src="/video-1.webm" type="video/webm" />
      </video>
    </header>
  );
}

export default Hero;
