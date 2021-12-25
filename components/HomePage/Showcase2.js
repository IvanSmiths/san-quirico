/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

function Showcase2() {
  return (
    <div className="foto-san-quirico-2-cnt">
      <div className="foto-san-quirico-2-paragrafo-cnt">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="medium-font"
        >
          <em>+++</em>
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          distinctio fugit, dolore, accusantium. <br />
          <br />
          Sequi assumenda dolorem adipisci qui nesciunt amet expedita quod
          beatae unde iusto ut, possimus aspernatur! Dolorem, voluptatum!
        </motion.p>
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
            src={'/0015.jpg'}
            height={'700px'}
            width={'100%'}
          />
        </picture>{' '}
      </div>
    </div>
  );
}

export default Showcase2;
