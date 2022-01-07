/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

function Showcase2() {
  return (
    <div className="foto-san-quirico-2-cnt">
      <div className="foto-san-quirico-2-img-cnt">
        <div className="fig-cnt">
          <motion.figcaption
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <em>+</em> tomba
          </motion.figcaption>
        </div>
        <picture className="test2">
          <source
            alt={'sito archeologico di san quirico, pozzo'}
            decoding={'async'}
            loading={'lazy'}
            height={'700px'}
            width={'100%'}
            srcSet={'/scavo-archeologico.webp'}
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
            src={'/scavo-archeologico.jpg'}
            height={'700px'}
            width={'100%'}
          />
        </picture>{' '}
      </div>
      <div className="foto-san-quirico-2-paragrafo-cnt">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="medium-font"
        >
          <em>+++</em>
          <br /> La decadenza dell{`'`}edificio sacro fu dovuta probabilmente
          alla sua localizzazione impervia e disagevole, ma soprattutto all{`'`}
          importanza assunta dalla viabilità del fondovalle con la fondazione
          delle {'"'}terre nuove{'"'} sotto la Repubblica fiorentina.
        </motion.p>
      </div>
    </div>
  );
}

export default Showcase2;
