/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

function Showcase2() {
  return (
    <div className="foto-san-quirico-2-cnt">
      <div className="foto-san-quirico-2-paragrafo-cnt">
        <p className="medium-font">
          +++ <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Omnis distinctio fugit, dolore, accusantium. <br />
          <br />
          Sequi assumenda dolorem adipisci qui nesciunt amet expedita quod
          beatae unde iusto ut, possimus aspernatur! Dolorem, voluptatum!
          <br />
          <br />
          Sequi assumenda dolorem adipisci.
        </p>
      </div>
      <div className="foto-san-quirico-2-img-cnt">
        <picture>
          <source
            alt={'sito archeologico di san quirico, pozzo'}
            decoding={'async'}
            loading={'lazy'}
            height={'700px'}
            width={'100%'}
            srcSet={'/0015.webp'}
            type="image/webp"
          />
          <img
            alt={'sito archeologico di san quirico, pozzo'}
            loading={'lazy'}
            decoding={'async'}
            src={'/0015.jpg'}
            height={'700px'}
            width={'100%'}
          />
        </picture>{' '}
      </div>
      <video autoPlay muted loop>
        <source src="/video-1.webm" type="video/webm" />
      </video>
    </div>
  );
}

export default Showcase2;
