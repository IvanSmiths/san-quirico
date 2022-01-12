/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Gallery() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('#box'),
      {
        x: 0,
        opacity: 1,
      },
      {
        x: '-200vw',
        opacity: 1,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: element.querySelector('#box'),
          start: 'top top',
          end: 'bottom top',
          ease: 'power1',
          scrub: true,
          toggleClass: 'box-fixed',
        },
      }
    );
  }, []);
  return (
    <>
      <div ref={ref} className="box-cnt" id="box-cnt">
        <div id="box" className="box">
          <div id="box1" className="box1">
            <picture className="archeologia-foto-1">
              <source
                alt={'sito archeologico di san quirico, pozzo'}
                decoding={'async'}
                loading={'lazy'}
                height={'auto'}
                width={'50%'}
                srcSet={'/main-image.webp'}
                type="image/webp"
              />
              <img
                alt={'sito archeologico di san quirico, pozzo'}
                loading={'lazy'}
                decoding={'async'}
                src={'/main-image.jpg'}
                height={'auto'}
                width={'50%'}
              />
            </picture>
            <picture className="archeologia-foto-2">
              <source
                alt={'sito archeologico di san quirico, pozzo'}
                decoding={'async'}
                loading={'lazy'}
                height={'50%'}
                width={'auto'}
                srcSet={'/0015.webp'}
                type="image/webp"
              />
              <img
                alt={'sito archeologico di san quirico, pozzo'}
                loading={'lazy'}
                decoding={'async'}
                src={'/0015.jpg'}
                height={'50%'}
                width={'auto'}
              />
            </picture>
          </div>
          <div id="box2" className="box2">
            {' '}
            <picture className="archeologia-foto-1">
              <source
                alt={'sito archeologico di san quirico, pozzo'}
                decoding={'async'}
                loading={'lazy'}
                height={'auto'}
                width={'50%'}
                srcSet={'/main-image.webp'}
                type="image/webp"
              />
              <img
                alt={'sito archeologico di san quirico, pozzo'}
                loading={'lazy'}
                decoding={'async'}
                src={'/main-image.jpg'}
                height={'auto'}
                width={'50%'}
              />
            </picture>
            <picture className="archeologia-foto-2">
              <source
                alt={'sito archeologico di san quirico, pozzo'}
                decoding={'async'}
                loading={'lazy'}
                height={'50%'}
                width={'auto'}
                srcSet={'/0015.webp'}
                type="image/webp"
              />
              <img
                alt={'sito archeologico di san quirico, pozzo'}
                loading={'lazy'}
                decoding={'async'}
                src={'/0015.jpg'}
                height={'50%'}
                width={'auto'}
              />
            </picture>
          </div>
          <div id="box3" className="box3">
            {' '}
            <picture className="archeologia-foto-1">
              <source
                alt={'sito archeologico di san quirico, pozzo'}
                decoding={'async'}
                loading={'lazy'}
                height={'auto'}
                width={'50%'}
                srcSet={'/main-image.webp'}
                type="image/webp"
              />
              <img
                alt={'sito archeologico di san quirico, pozzo'}
                loading={'lazy'}
                decoding={'async'}
                src={'/main-image.jpg'}
                height={'auto'}
                width={'50%'}
              />
            </picture>
            <picture className="archeologia-foto-2">
              <source
                alt={'sito archeologico di san quirico, pozzo'}
                decoding={'async'}
                loading={'lazy'}
                height={'50%'}
                width={'auto'}
                srcSet={'/0015.webp'}
                type="image/webp"
              />
              <img
                alt={'sito archeologico di san quirico, pozzo'}
                loading={'lazy'}
                decoding={'async'}
                src={'/0015.jpg'}
                height={'50%'}
                width={'auto'}
              />
            </picture>
          </div>
        </div>
      </div>
      <div>
        <div className="box-cnt-2">
          <div id="box3" className="box3-2">
            {' '}
            <picture className="archeologia-foto-1">
              <source
                alt={'sito archeologico di san quirico, pozzo'}
                decoding={'async'}
                loading={'lazy'}
                height={'auto'}
                width={'50%'}
                srcSet={'/main-image.webp'}
                type="image/webp"
              />
              <img
                alt={'sito archeologico di san quirico, pozzo'}
                loading={'lazy'}
                decoding={'async'}
                src={'/main-image.jpg'}
                height={'auto'}
                width={'50%'}
              />
            </picture>
            <picture className="archeologia-foto-2">
              <source
                alt={'sito archeologico di san quirico, pozzo'}
                decoding={'async'}
                loading={'lazy'}
                height={'50%'}
                width={'auto'}
                srcSet={'/0015.webp'}
                type="image/webp"
              />
              <img
                alt={'sito archeologico di san quirico, pozzo'}
                loading={'lazy'}
                decoding={'async'}
                src={'/0015.jpg'}
                height={'50%'}
                width={'auto'}
              />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
