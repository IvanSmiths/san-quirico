/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Marquee from './Marquee';
import Marquee2 from './Marquee2';
import Marquee3 from './Marquee3';
import Marquee4 from './Marquee4';
import { motion } from 'framer-motion';

const CntMarquee = () => {
  return (
    <div className="marquee-sezione-cnt">
      <picture className="marquee-sezione">
        <source
          alt={'sito archeologico di san quirico, pozzo'}
          decoding={'async'}
          loading={'lazy'}
          height={'300px'}
          width={'200px'}
          srcSet={'/san-quirico-chiave-di-volta.jpg'}
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
          src={'/san-quirico-chiave-di-volta.jpg'}
          height={'300px'}
          width={'200px'}
        />
      </picture>
      <picture className="marquee-sezione-2">
        <source
          alt={'sito archeologico di san quirico, pozzo'}
          decoding={'async'}
          loading={'lazy'}
          height={'300px'}
          width={'200px'}
          srcSet={'/san-quirico-mura.webp'}
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
          src={'/san-quirico-mura.jpg'}
          height={'300px'}
          width={'200px'}
        />
      </picture>
      <Marquee />
      <Marquee2 />
      <Marquee3 />
      <Marquee4 />
    </div>
  );
};

export default CntMarquee;
