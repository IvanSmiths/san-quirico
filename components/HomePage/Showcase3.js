/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

const Showcase3 = () => {
  return (
    <div className="archeologia-sezione">
      <div className="archeologia-descrizione">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="medium-font impact"
        >
          Lorem ipsum
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <em className="bold">+++</em> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic
          nulla adipisci nesciunt tempore nostrum dolorum necessitatibus numquam
          iusto esse excepturi, impedit tempora a earum possimus explicabo!
          Reprehenderit, optio animi!
        </motion.p>
      </div>
      <picture>
        <source
          alt={'sito archeologico di san quirico, pozzo'}
          decoding={'async'}
          loading={'lazy'}
          height={'100%'}
          width={'100%'}
          srcSet={'/san-quirico-notte-2.webp'}
          type="image/webp"
        />
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          alt={'sito archeologico di san quirico, pozzo'}
          loading={'lazy'}
          decoding={'async'}
          src={'/san-quirico-notte-2.jpg'}
          height={'100%'}
          width={'100%'}
        />
      </picture>{' '}
    </div>
  );
};

export default Showcase3;
