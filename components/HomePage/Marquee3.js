import React from 'react';
import { motion } from 'framer-motion';

const marqueeVariants = {
  animate: {
    x: [430, 1735],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 186,
        ease: 'linear',
      },
    },
  },
};

const Marquee = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      className="marquee"
    >
      <motion.div
        className="track"
        variants={marqueeVariants}
        animate="animate"
      >
        <motion.em
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="impact extreme-font"
        >
          san quirico san quirico san quirico san quirico san quirico san
          quirico
        </motion.em>
      </motion.div>
    </motion.div>
  );
};

export default Marquee;
