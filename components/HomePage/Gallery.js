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
          markers: true,
          end: 'bottom top',
          ease: 'power1',
          scrub: true,
          toggleClass: 'box-fixed',
        },
      }
    );
  }, []);
  return (
    <section ref={ref}>
      <div className="box-cnt" id="box-cnt">
        <div id="box" className="box">
          <div id="box1" className="box1"></div>
          <div id="box2" className="box2"></div>
          <div id="box3" className="box3"></div>
        </div>
      </div>
      <div>
        <div className="box-cnt-2">
          <div id="box3" className="box3-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
