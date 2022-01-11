/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

function Contatti() {
  return (
    <main className="contatti-cnt">
      <div className="contatti-info-cnt">
        <h1 className="medium-font">Hai qualche domanda?</h1>
        <p className="small-font">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro iusto
          excepturi nemo nisi cum assumenda expedita omnis fugit rerum, earum
          quis? Nostrum, suscipit aliquam a beatae architecto aspernatur odio
          vel.
        </p>
        <ul>
          <li>
            Email: {''}
            <a href="mailto:">info@sanquiricoarcheologia.it</a>
          </li>
          <li>
            <a
              rel="noopener noreferrer nofollow"
              target="_blank"
              href="https://www.instagram.com/sanquiricoarcheologia/"
            >
              <svg
                id="instagram"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
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
          </li>
        </ul>
      </div>
      <div className="contatti-form-cnt">
        <form action="https://formsubmit.co/" method="POST" className="form">
          <motion.input
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            type="hidden"
            name="_next"
            value="http://localhost:3000/thank-you-message"
          />
          <motion.input
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            type="hidden"
            name="_subject"
            className="small-font"
            value="San Quirico Archeologia"
          />
          <motion.label
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            htmlFor="name"
            className="small-font"
          >
            Nome
          </motion.label>
          <motion.input
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            type="text"
            id="name"
            name="name"
            minLength="3"
            className="small-font"
            required
          />
          <motion.label
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            htmlFor="object"
            className="small-font"
          >
            Oggetto
          </motion.label>
          <motion.input
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            type="text"
            id="object"
            name="object"
            minLength="3"
            className="small-font"
            required
          />
          <motion.label
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            htmlFor="email"
            className="small-font"
          >
            Email
          </motion.label>
          <motion.input
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            type="email"
            className="small-font"
            id="email"
            name="email"
            minLength="6"
            required
          />
          <motion.label
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="small-font"
            htmlFor="message"
          >
            Messaggio
          </motion.label>
          <motion.textarea
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            id="message"
            className="small-font"
            name="message"
            minLength="10"
            cols="30"
            rows="10"
          ></motion.textarea>
          <motion.button
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="btn small-font pointer"
            type="submit"
          >
            Invia
          </motion.button>
        </form>
      </div>
    </main>
  );
}

export default Contatti;
