import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants2 = {
  open: {
    y: 0,
    zIndex: 99999999,
    opacity: 1,
    display: 'block',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    zIndex: 0,
    display: 'none',
    opacity: 0,
    transition: {
      y: { stiffness: 7000 },
    },
  },
};

export const Navigation = ({ toggle }) => (
  <motion.ul className="nav-list-cnt" variants={variants}>
    <motion.li
      onClick={toggle}
      className="nav-list"
      variants={variants2}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href="/">
        <a className="hero-font bold">HOME</a>
      </Link>
    </motion.li>
    <motion.li
      onClick={toggle}
      className="nav-list"
      variants={variants2}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href="/chi-siamo">
        <a className="hero-font bold">CHI SIAMO</a>
      </Link>
    </motion.li>
    <motion.li
      onClick={toggle}
      className="nav-list"
      variants={variants2}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href="/contatti">
        <a className="hero-font bold">CONTATTI</a>
      </Link>
    </motion.li>
    <ul className="social-mobile-cnt">
      <motion.li
        onClick={toggle}
        variants={variants2}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          className="social-mobile"
          rel="noopener noreferrer nofollow"
          target="_blank"
          href="https://www.instagram.com/sanquiricoarcheologia/"
        >
          <svg
            id="instagram"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 33.742 33.743"
          >
            <g id="Raggruppa_3" data-name="Raggruppa 3">
              <g id="Raggruppa_2" data-name="Raggruppa 2">
                <path
                  id="Tracciato_5"
                  data-name="Tracciato 5"
                  d="M23.2,0H10.545A10.546,10.546,0,0,0,0,10.545V23.2A10.546,10.546,0,0,0,10.545,33.743H23.2A10.546,10.546,0,0,0,33.742,23.2V10.545A10.546,10.546,0,0,0,23.2,0Zm7.381,23.2A7.389,7.389,0,0,1,23.2,30.579H10.545A7.389,7.389,0,0,1,3.163,23.2V10.545a7.389,7.389,0,0,1,7.381-7.381H23.2a7.389,7.389,0,0,1,7.381,7.381Z"
                  fill="#2e2d3a"
                />
              </g>
            </g>
            <g
              id="Raggruppa_5"
              data-name="Raggruppa 5"
              transform="translate(8.436 8.436)"
            >
              <g id="Raggruppa_4" data-name="Raggruppa 4">
                <path
                  id="Tracciato_6"
                  data-name="Tracciato 6"
                  d="M136.436,128a8.436,8.436,0,1,0,8.436,8.436A8.436,8.436,0,0,0,136.436,128Zm0,13.708a5.272,5.272,0,1,1,5.272-5.272A5.28,5.28,0,0,1,136.436,141.708Z"
                  transform="translate(-128 -128)"
                  fill="#2e2d3a"
                />
              </g>
            </g>
            <g
              id="Raggruppa_7"
              data-name="Raggruppa 7"
              transform="translate(24.815 6.679)"
            >
              <g id="Raggruppa_6" data-name="Raggruppa 6">
                <ellipse
                  id="Ellisse_8"
                  data-name="Ellisse 8"
                  cx="1.124"
                  cy="1.124"
                  rx="1.124"
                  ry="1.124"
                  fill="#2e2d3a"
                />
              </g>
            </g>
          </svg>
        </a>
      </motion.li>
      <motion.li
        onClick={toggle}
        variants={variants2}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          className="social-mobile"
          rel="noopener noreferrer nofollow"
          target="_blank"
          href="https://www.instagram.com/sanquiricoarcheologia/"
        >
          <svg
            id="instagram"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 33.742 33.743"
          >
            <g id="Raggruppa_3" data-name="Raggruppa 3">
              <g id="Raggruppa_2" data-name="Raggruppa 2">
                <path
                  id="Tracciato_5"
                  data-name="Tracciato 5"
                  d="M23.2,0H10.545A10.546,10.546,0,0,0,0,10.545V23.2A10.546,10.546,0,0,0,10.545,33.743H23.2A10.546,10.546,0,0,0,33.742,23.2V10.545A10.546,10.546,0,0,0,23.2,0Zm7.381,23.2A7.389,7.389,0,0,1,23.2,30.579H10.545A7.389,7.389,0,0,1,3.163,23.2V10.545a7.389,7.389,0,0,1,7.381-7.381H23.2a7.389,7.389,0,0,1,7.381,7.381Z"
                  fill="#2e2d3a"
                />
              </g>
            </g>
            <g
              id="Raggruppa_5"
              data-name="Raggruppa 5"
              transform="translate(8.436 8.436)"
            >
              <g id="Raggruppa_4" data-name="Raggruppa 4">
                <path
                  id="Tracciato_6"
                  data-name="Tracciato 6"
                  d="M136.436,128a8.436,8.436,0,1,0,8.436,8.436A8.436,8.436,0,0,0,136.436,128Zm0,13.708a5.272,5.272,0,1,1,5.272-5.272A5.28,5.28,0,0,1,136.436,141.708Z"
                  transform="translate(-128 -128)"
                  fill="#2e2d3a"
                />
              </g>
            </g>
            <g
              id="Raggruppa_7"
              data-name="Raggruppa 7"
              transform="translate(24.815 6.679)"
            >
              <g id="Raggruppa_6" data-name="Raggruppa 6">
                <ellipse
                  id="Ellisse_8"
                  data-name="Ellisse 8"
                  cx="1.124"
                  cy="1.124"
                  rx="1.124"
                  ry="1.124"
                  fill="#2e2d3a"
                />
              </g>
            </g>
          </svg>
        </a>
      </motion.li>
      <motion.li
        onClick={toggle}
        variants={variants2}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          className="social-mobile"
          rel="noopener noreferrer nofollow"
          target="_blank"
          href="https://www.instagram.com/sanquiricoarcheologia/"
        >
          <svg
            id="instagram"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 33.742 33.743"
          >
            <g id="Raggruppa_3" data-name="Raggruppa 3">
              <g id="Raggruppa_2" data-name="Raggruppa 2">
                <path
                  id="Tracciato_5"
                  data-name="Tracciato 5"
                  d="M23.2,0H10.545A10.546,10.546,0,0,0,0,10.545V23.2A10.546,10.546,0,0,0,10.545,33.743H23.2A10.546,10.546,0,0,0,33.742,23.2V10.545A10.546,10.546,0,0,0,23.2,0Zm7.381,23.2A7.389,7.389,0,0,1,23.2,30.579H10.545A7.389,7.389,0,0,1,3.163,23.2V10.545a7.389,7.389,0,0,1,7.381-7.381H23.2a7.389,7.389,0,0,1,7.381,7.381Z"
                  fill="#2e2d3a"
                />
              </g>
            </g>
            <g
              id="Raggruppa_5"
              data-name="Raggruppa 5"
              transform="translate(8.436 8.436)"
            >
              <g id="Raggruppa_4" data-name="Raggruppa 4">
                <path
                  id="Tracciato_6"
                  data-name="Tracciato 6"
                  d="M136.436,128a8.436,8.436,0,1,0,8.436,8.436A8.436,8.436,0,0,0,136.436,128Zm0,13.708a5.272,5.272,0,1,1,5.272-5.272A5.28,5.28,0,0,1,136.436,141.708Z"
                  transform="translate(-128 -128)"
                  fill="#2e2d3a"
                />
              </g>
            </g>
            <g
              id="Raggruppa_7"
              data-name="Raggruppa 7"
              transform="translate(24.815 6.679)"
            >
              <g id="Raggruppa_6" data-name="Raggruppa 6">
                <ellipse
                  id="Ellisse_8"
                  data-name="Ellisse 8"
                  cx="1.124"
                  cy="1.124"
                  rx="1.124"
                  ry="1.124"
                  fill="#2e2d3a"
                />
              </g>
            </g>
          </svg>
        </a>
      </motion.li>
    </ul>
    <motion.a
      className="small-font bold"
      variants={variants2}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href="mailto:info@sanquiricoarcheologia.it"
    >
      info@sanquiricoarcheologia.it
    </motion.a>
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
