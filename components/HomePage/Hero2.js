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
            alt="logo di san quirico archeologia"
            className="logo-hero"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 504 504.002"
          >
            <path
              id="Tracciato_3"
              data-name="Tracciato 3"
              d="M602,280a84.412,84.412,0,0,0-14.359-47.2,85.074,85.074,0,0,0-36.168-87.422,85.093,85.093,0,0,0-66.93-66.867A84.775,84.775,0,0,0,397.254,42.4a84.753,84.753,0,0,0-94.516-.007A84.773,84.773,0,0,0,215.453,78.5a85.085,85.085,0,0,0-66.942,66.942,84.761,84.761,0,0,0-36.105,87.285,84.77,84.77,0,0,0-.011,94.532A84.775,84.775,0,0,0,148.5,414.553a85.093,85.093,0,0,0,66.867,66.93,85.074,85.074,0,0,0,87.422,36.168,84.783,84.783,0,0,0,94.406-.007A84.922,84.922,0,0,0,484.546,481.5a85.108,85.108,0,0,0,66.946-66.946A84.922,84.922,0,0,0,587.64,327.2,84.409,84.409,0,0,0,602,280ZM552.133,149.21A82.357,82.357,0,0,1,585.4,229.616a85.351,85.351,0,0,0-41.1-30.074,85.739,85.739,0,0,0,7.84-50.332Zm-380.32,72.707c18.34,18.34,80.32,36.391,126.04,47.711-46.57-7.039-110.75-14.078-134.7-4.156a84.655,84.655,0,0,0-21.262,12.711,82.535,82.535,0,0,1-26.52-44.855A82.507,82.507,0,0,1,157,202.051a85.317,85.317,0,0,0,14.812,19.867Zm-12.1-20.719a81.865,81.865,0,0,1,23.223-3.344c35.613,0,134.49,62.621,160.16,79.281-29.93-6.371-144.12-32-169.31-57.188a82.543,82.543,0,0,1-14.07-18.75ZM342.521,280c-30.09,5.566-145.41,25.594-178.3,11.953A81.811,81.811,0,0,1,144.069,280a81.891,81.891,0,0,1,20.152-11.957C197.131,254.409,312.441,274.437,342.521,280ZM163.151,294.53c23.969,9.926,88.141,2.883,134.71-4.16-45.715,11.324-107.71,29.375-126.05,47.711A85.306,85.306,0,0,0,157,357.948a82.511,82.511,0,0,1-41.633-31.277,82.508,82.508,0,0,1,26.52-44.855,84.624,84.624,0,0,0,21.262,12.715Zm10.633,45.52c25.184-25.18,139.38-50.816,169.31-57.188-25.668,16.66-124.54,79.281-160.16,79.281a82.012,82.012,0,0,1-23.223-3.34,82.521,82.521,0,0,1,14.07-18.754Zm170.93-54.758c-17.34,25.215-84.723,120.9-117.63,134.53a81.836,81.836,0,0,1-22.734,5.8,82.488,82.488,0,0,1,5.824-22.707c13.633-32.91,109.33-100.29,134.54-117.63Zm-134.54-128.21a81.735,81.735,0,0,1-5.793-22.7,81.864,81.864,0,0,1,22.7,5.793c32.906,13.629,100.29,109.32,117.63,134.54-25.215-17.34-120.91-84.719-134.54-117.62Zm136.96,129.83c-6.371,29.93-32,144.12-57.188,169.31A82.5,82.5,0,0,1,271.2,470.3a81.905,81.905,0,0,1-3.344-23.223c0-35.621,62.621-134.49,79.281-160.16Zm-79.281-173.98A81.871,81.871,0,0,1,271.2,89.709a82.5,82.5,0,0,1,18.75,14.07c25.184,25.184,50.816,139.38,57.188,169.31-16.66-25.668-79.281-124.54-79.281-160.16ZM350,287.482c5.566,30.09,25.59,145.4,11.953,178.31A82.338,82.338,0,0,1,350,485.987a82.42,82.42,0,0,1-11.957-20.2c-13.629-32.906,6.391-148.21,11.957-178.3ZM338.041,94.212A81.941,81.941,0,0,1,350,74.06a81.755,81.755,0,0,1,11.953,20.152c13.637,32.9-6.387,148.22-11.953,178.3C344.432,242.426,324.412,127.112,338.041,94.212Zm94.1,352.86A82.048,82.048,0,0,1,428.8,470.3a82.537,82.537,0,0,1-18.754-14.074c-25.18-25.18-50.816-139.38-57.188-169.31,16.66,25.672,79.281,124.54,79.281,160.16Zm-79.281-173.98c6.371-29.93,32.008-144.12,57.188-169.31A82.391,82.391,0,0,1,428.8,89.712a82,82,0,0,1,3.34,23.223c0,35.613-62.621,134.49-79.281,160.16Zm136.96,129.84a82.591,82.591,0,0,1,5.832,22.734,82.273,82.273,0,0,1-22.734-5.832c-32.91-13.629-100.29-109.32-117.63-134.53,25.211,17.336,120.9,84.719,134.53,117.63Zm-134.53-128.21c17.34-25.215,84.723-120.91,117.63-134.54a82.453,82.453,0,0,1,22.707-5.824,81.725,81.725,0,0,1-5.8,22.734C476.2,190,380.5,257.382,355.294,274.712Zm170.93,65.344A82.438,82.438,0,0,1,540.3,358.82a82.043,82.043,0,0,1-23.223,3.34c-35.617,0-134.49-62.621-160.16-79.281,29.938,6.371,144.13,32.008,169.31,57.188Zm-169.3-62.914c25.668-16.66,124.54-79.281,160.16-79.281a81.908,81.908,0,0,1,23.223,3.344,82.516,82.516,0,0,1-14.074,18.75c-25.184,25.18-139.38,50.816-169.31,57.188ZM528.192,338.1c-18.34-18.34-80.328-36.391-126.04-47.711,46.57,7.043,110.76,14.082,134.71,4.16a85.218,85.218,0,0,0,21.312-12.711,81.831,81.831,0,0,1,22.074,30.68,83.223,83.223,0,0,1,4.426,14.113A82.5,82.5,0,0,1,543,357.964,85.17,85.17,0,0,0,528.193,338.1Zm-170.7-58.082c30.09-5.566,145.41-25.578,178.31-11.957A82.47,82.47,0,0,1,556,280.015a82.281,82.281,0,0,1-20.2,11.953c-32.91,13.629-148.22-6.387-178.3-11.953Zm179.37-14.527c-8.527-3.531-22.137-4.914-38.238-4.914-29.156,0-66.469,4.535-96.469,9.07,45.715-11.32,107.7-29.371,126.04-47.711a85.323,85.323,0,0,0,14.816-19.867A82.52,82.52,0,0,1,584.683,233.4a83.392,83.392,0,0,1-4.426,14.117,81.81,81.81,0,0,1-22.074,30.68,85.2,85.2,0,0,0-21.32-12.711Zm13.426-103.61a81.752,81.752,0,0,1-8.668,36.82,84.751,84.751,0,0,0-24.539-3.613c-25.938,0-82.531,31.066-122.86,55.391,37.906-27.953,88.266-68.352,98.191-92.312a84.526,84.526,0,0,0,6.047-24.055,81.564,81.564,0,0,1,37.34,6.082,83.256,83.256,0,0,1,13.168,6.887,83.032,83.032,0,0,1,1.324,14.8Zm-24.062-58.086a81.6,81.6,0,0,1,21.965,39.523,86.06,86.06,0,0,0-11.328-5.7,84.827,84.827,0,0,0-32.5-6.512q-2.842,0-5.672.191A85.35,85.35,0,0,0,486.64,81.8a81.66,81.66,0,0,1,39.586,21.988Zm-30.34,27.742a85.171,85.171,0,0,0-24.023,6.082C447.9,147.542,407.5,197.9,379.551,235.807c24.32-40.332,55.387-96.926,55.387-122.86A84.773,84.773,0,0,0,431.329,88.4a81.8,81.8,0,0,1,36.82-8.668,82.784,82.784,0,0,1,14.738,1.313,82.621,82.621,0,0,1,13,50.488ZM445.378,49.768a81.609,81.609,0,0,1,35.344,28.1,86.1,86.1,0,0,0-12.578-.918,84.584,84.584,0,0,0-37.684,8.77,85.266,85.266,0,0,0-30.016-41.062,81.626,81.626,0,0,1,44.934,5.113ZM427.956,87.01a85.234,85.234,0,0,0-19.867,14.812c-18.34,18.34-36.391,80.328-47.711,126.05,7.039-46.566,14.086-110.75,4.16-134.71A84.75,84.75,0,0,0,351.827,71.9,82.515,82.515,0,0,1,396.682,45.38a82.5,82.5,0,0,1,31.273,41.633ZM350.007,30.8a81.655,81.655,0,0,1,43.469,12.469,85.269,85.269,0,0,0-43.469,26.48,85.288,85.288,0,0,0-43.469-26.48A81.623,81.623,0,0,1,350.007,30.8ZM303.335,45.381A82.518,82.518,0,0,1,348.187,71.9,84.822,84.822,0,0,0,335.48,93.163c-9.926,23.961-2.879,88.133,4.156,134.7-11.32-45.715-29.371-107.7-47.711-126.04a85.194,85.194,0,0,0-19.867-14.812,82.477,82.477,0,0,1,31.277-41.633Zm-48.7,4.387a81.677,81.677,0,0,1,44.93-5.113,85.306,85.306,0,0,0-30.012,41.062,84.581,84.581,0,0,0-37.684-8.77,86.114,86.114,0,0,0-12.582.918,81.621,81.621,0,0,1,35.348-28.1Zm-37.5,31.273a83.121,83.121,0,0,1,14.738-1.312A81.8,81.8,0,0,1,268.69,88.4a84.759,84.759,0,0,0-3.613,24.543c0,25.938,31.066,82.531,55.391,122.86-27.953-37.9-68.352-88.266-92.312-98.191a84.586,84.586,0,0,0-24.02-6.047,82.514,82.514,0,0,1,13-50.523Zm-43.348,22.75a81.657,81.657,0,0,1,39.59-21.984,85.347,85.347,0,0,0-12.051,49.523A85.573,85.573,0,0,0,151.8,143.381,81.652,81.652,0,0,1,173.784,103.791Zm-22.75,43.348a82.479,82.479,0,0,1,50.523-13,84.728,84.728,0,0,0,6.047,24.02c9.926,23.961,60.285,64.359,98.191,92.312-40.332-24.32-96.926-55.391-122.86-55.391a84.775,84.775,0,0,0-24.543,3.613,81.828,81.828,0,0,1-8.668-36.82,83.471,83.471,0,0,1,1.313-14.734Zm-31.273,37.5a81.655,81.655,0,0,1,28.1-35.352,86.168,86.168,0,0,0-.918,12.586,84.584,84.584,0,0,0,8.77,37.684,85.284,85.284,0,0,0-41.062,30.012,81.685,81.685,0,0,1,5.113-44.93Zm-18.969,95.371a81.655,81.655,0,0,1,12.469-43.469,85.289,85.289,0,0,0,26.48,43.469,85.288,85.288,0,0,0-26.48,43.469,81.623,81.623,0,0,1-12.469-43.469Zm47.066,130.71a81.99,81.99,0,0,1-33.211-80.278,85.3,85.3,0,0,0,41.062,30.016,84.578,84.578,0,0,0-8.77,37.684,86.059,86.059,0,0,0,.918,12.578Zm1.867-12.578a81.8,81.8,0,0,1,8.668-36.82,84.757,84.757,0,0,0,24.543,3.609c25.938,0,82.531-31.066,122.86-55.387-37.9,27.953-88.266,68.352-98.191,92.312a85.3,85.3,0,0,0-6.082,24.023,82.625,82.625,0,0,1-50.492-13,83.011,83.011,0,0,1-1.309-14.734Zm24.059,58.082A81.644,81.644,0,0,1,151.8,416.642a85.234,85.234,0,0,0,49.488,12.051,84.564,84.564,0,0,0,6.316,38.172,86.056,86.056,0,0,0,5.7,11.328,81.565,81.565,0,0,1-39.523-21.965Zm36.4,9.574a81.8,81.8,0,0,1-6.082-37.34,84.654,84.654,0,0,0,24.055-6.047c23.961-9.926,64.359-60.285,92.312-98.191-24.32,40.332-55.391,96.926-55.391,122.86a84.747,84.747,0,0,0,3.613,24.539,81.777,81.777,0,0,1-36.82,8.668,83.113,83.113,0,0,1-14.8-1.32,84.271,84.271,0,0,1-6.883-13.172Zm44.457,44.449a81.572,81.572,0,0,1-35.418-28.105,85.463,85.463,0,0,0,12.652.93,84.551,84.551,0,0,0,37.68-8.766,85.32,85.32,0,0,0,30.074,41.105,81.5,81.5,0,0,1-44.988-5.164Zm17.422-37.238A85.248,85.248,0,0,0,291.925,458.2c18.34-18.34,36.391-80.32,47.711-126.04-7.035,46.57-14.082,110.75-4.156,134.71a85.1,85.1,0,0,0,12.711,21.312,81.8,81.8,0,0,1-30.68,22.074,82.943,82.943,0,0,1-14.117,4.426,82.464,82.464,0,0,1-31.336-41.664Zm77.949,56.211A81.668,81.668,0,0,1,306.6,516.79a86.011,86.011,0,0,0,11.977-3.965,84.547,84.547,0,0,0,31.434-22.492,84.511,84.511,0,0,0,31.434,22.492,86.14,86.14,0,0,0,11.977,3.965,81.664,81.664,0,0,1-43.41,12.434Zm46.613-14.543a83.566,83.566,0,0,1-14.113-4.426,81.841,81.841,0,0,1-30.68-22.074,85.267,85.267,0,0,0,12.711-21.312c9.926-23.961,2.879-88.141-4.16-134.71,11.324,45.715,29.375,107.7,47.711,126.04a85.324,85.324,0,0,0,19.867,14.816,82.494,82.494,0,0,1-31.336,41.664Zm48.758-4.43a81.411,81.411,0,0,1-44.988,5.16,85.318,85.318,0,0,0,30.07-41.105,85.654,85.654,0,0,0,50.332,7.836,81.513,81.513,0,0,1-35.414,28.109Zm37.57-31.285a83.108,83.108,0,0,1-14.8,1.32,81.752,81.752,0,0,1-36.82-8.668,84.75,84.75,0,0,0,3.609-24.539c0-25.938-31.066-82.531-55.387-122.86,27.953,37.9,68.352,88.266,92.312,98.191a84.492,84.492,0,0,0,24.055,6.047,82.963,82.963,0,0,1-12.965,50.512Zm43.277-22.738a81.612,81.612,0,0,1-39.586,21.984,85.306,85.306,0,0,0,12.047-49.523,84.92,84.92,0,0,0,49.523-12.047A81.59,81.59,0,0,1,526.225,456.228Zm22.738-43.277a83.072,83.072,0,0,1-13.168,6.887,82.189,82.189,0,0,1-37.34,6.086,84.621,84.621,0,0,0-6.047-24.055c-9.926-23.961-60.293-64.359-98.191-92.312,40.332,24.32,96.926,55.387,122.86,55.387a84.746,84.746,0,0,0,24.539-3.609,81.753,81.753,0,0,1,8.668,36.82,83.089,83.089,0,0,1-1.324,14.8Zm31.285-37.57a81.515,81.515,0,0,1-28.1,35.414,85.653,85.653,0,0,0-7.836-50.332,85.312,85.312,0,0,0,41.1-30.07,81.672,81.672,0,0,1-5.164,44.988Zm2.574-63.938a84.515,84.515,0,0,0-22.492-31.434,84.543,84.543,0,0,0,22.492-31.434,85.969,85.969,0,0,0,3.965-11.977,81.994,81.994,0,0,1,0,86.82,85.837,85.837,0,0,0-3.965-11.977Z"
              transform="translate(-98 -28.001)"
            />
          </svg>{' '}
          <span className="titolo-4">San Quirico </span> <br />
          <span className="titolo-5"> In Alfiano</span>{' '}
          <Link href="/#about">
            <a>
              <motion.svg
                alt="scroll down"
                className="hero-freccia-2"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
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