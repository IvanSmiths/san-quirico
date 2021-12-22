/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

const Showcase3 = () => {
  return (
    <div className="archeologia-sezione">
      <div className="archeologia-descrizione">
        <h2 className="medium-font">Lorem ipsum</h2>
        <p>
          <em className="bold">+++</em> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic
          nulla adipisci nesciunt tempore nostrum dolorum necessitatibus numquam
          iusto esse excepturi, impedit tempora a earum possimus explicabo!
          Reprehenderit, optio animi!
        </p>
      </div>
      <motion.picture
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <source
          alt={'sito archeologico di san quirico, pozzo'}
          decoding={'async'}
          loading={'lazy'}
          height={'100%'}
          width={'100%'}
          srcSet={'/main-image.webp'}
          type="image/webp"
        />
        <img
          alt={'sito archeologico di san quirico, pozzo'}
          loading={'lazy'}
          decoding={'async'}
          src={'/main-image.jpg'}
          height={'100%'}
          width={'100%'}
        />
      </motion.picture>{' '}
    </div>
  );
};

export default Showcase3;
