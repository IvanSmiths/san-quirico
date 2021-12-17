/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)',
    },
  };

  return (
    <header className="home-header-cnt">
      <div className="home-header">
        <h1 className="medium-font titolo bold">
          San Quirico, il monastero del 1500.
        </h1>
        <motion.svg
          className="hero-freccia"
          xmlns="http://www.w3.org/2000/svg"
          width="48.995"
          height="22.783"
          viewBox="0 0 48.995 22.783"
        >
          <motion.path
            d="M111.123,216.077a3.027,3.027,0,0,1-1.143-.327L87.123,196.159a1.62,1.62,0,0,1,2.122-2.449l21.878,18.613,21.715-18.613a1.62,1.62,0,1,1,2.122,2.449L112.1,215.751A1.75,1.75,0,0,1,111.123,216.077Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 6, ease: 'easeInOut' },
              fill: { duration: 6, ease: [1, 0, 0.8, 1] },
            }}
            id="noun-down-arrow-3012911"
            transform="translate(-86.544 -193.294)"
            fill="#fff"
          />
        </motion.svg>
      </div>
      <video className="home-header-img-cnt" autoPlay muted loop>
        <source src="/video-1.webm" type="video/webm" />
      </video>
    </header>
  );
}

export default Hero;
