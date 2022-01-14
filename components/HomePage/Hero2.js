/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
    <header className="home-header-cnt-2">
      <div className="home-header-2">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="hero-font titolo-2 bold"
        >
          <span className="titolo-6">La </span>
          <motion.picture
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className={'main-paragraph-image arrotondata'}
          >
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'100%'}
              width={'160px'}
              srcSet={'/san-quirico-ristrutturazione-3.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/san-quirico-ristrutturazione-3.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          <br />
          <span className="titolo-3">Pieve di</span> <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="70px"
            width="50px"
            className="logo-hero"
            viewBox="0 0 120.01 120.01"
          >
            <g id="Livello_2" data-name="Livello 2">
              <g id="Livello_1-2" data-name="Livello 1">
                <path d="M60,0a60,60,0,1,0,60,60A60.08,60.08,0,0,0,60,0Zm47.22,87.32A79.61,79.61,0,0,1,63.08,62.1l-1.34.8-1.48.82A79.7,79.7,0,0,1,60,114.59h0a79.66,79.66,0,0,1-.23-50.88L58.37,63l-1.46-.86A79.71,79.71,0,0,1,12.76,87.28l0,0A79.58,79.58,0,0,1,56.66,61.62c0-.52,0-1,0-1.56s0-1.13,0-1.69a79.69,79.69,0,0,1-43.9-25.64l0,0A79.72,79.72,0,0,1,56.94,57.91l1.33-.79c.49-.29,1-.55,1.48-.83A79.77,79.77,0,0,1,60,5.42h0a79.73,79.73,0,0,1,.22,50.88l1.35.76c.49.28,1,.58,1.46.87a79.72,79.72,0,0,1,44.16-25.19v0A79.74,79.74,0,0,1,63.36,58.39c0,.52,0,1,0,1.56s0,1.13,0,1.69a79.67,79.67,0,0,1,43.91,25.63ZM78.89,92.76a4.66,4.66,0,1,1,1.71-6.37A4.66,4.66,0,0,1,78.89,92.76ZM47.45,91a4.67,4.67,0,1,1-1.7-6.38A4.66,4.66,0,0,1,47.45,91ZM22.2,60a4.67,4.67,0,1,1,4.66,4.67A4.66,4.66,0,0,1,22.2,60ZM41.13,27.25a4.66,4.66,0,1,1-1.72,6.37A4.65,4.65,0,0,1,41.13,27.25ZM72.57,29a4.67,4.67,0,1,1,1.7,6.38A4.66,4.66,0,0,1,72.57,29ZM97.82,60a4.67,4.67,0,1,1-4.67-4.67A4.67,4.67,0,0,1,97.82,60Zm7.72,0a79.57,79.57,0,0,1,3.62-23.74,54.52,54.52,0,0,1,0,47.46A79.81,79.81,0,0,1,105.54,60Zm-.41-30.69a79.38,79.38,0,0,1-22.32-8.74,79.17,79.17,0,0,1-18.73-15A54.64,54.64,0,0,1,105.13,29.33ZM56,5.59a79.77,79.77,0,0,1-18.73,15,79.8,79.8,0,0,1-22.35,8.72A54.59,54.59,0,0,1,56,5.59ZM10.86,36.26A79.17,79.17,0,0,1,14.47,60a79.57,79.57,0,0,1-3.62,23.74,54.52,54.52,0,0,1,0-47.46Zm4,54.43a79.65,79.65,0,0,1,22.32,8.73,79.67,79.67,0,0,1,18.73,15A54.6,54.6,0,0,1,14.89,90.69ZM64,114.42a79.59,79.59,0,0,1,41.06-23.69A54.55,54.55,0,0,1,64,114.42Z" />
              </g>
            </g>
          </svg>
          <span className="titolo-4 impact">San Quirico </span> <br />
          <span className="titolo-5"> In Alfiano</span>{' '}
          <Link href="/#about">
            <a>
              <motion.svg
                alt="scroll down"
                className="hero-freccia-2"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="66"
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
            </a>
          </Link>
        </motion.h1>
      </div>
      <video className="home-header-img-cnt" autoPlay muted loop>
        <source src="/video-1.webm" type="video/webm" />
      </video>
    </header>
  );
}

export default Hero;
