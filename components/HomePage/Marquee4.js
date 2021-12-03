import React from 'react';
import { motion } from 'framer-motion';

const marqueeVariants = {
  animate: {
    x: [230, -1735],
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
    <div className="marquee">
      <motion.div
        className="track"
        variants={marqueeVariants}
        animate="animate"
      >
        <em className="impact large-font">
          san quirico san quirico san quirico
        </em>
      </motion.div>
    </div>
  );
};

export default Marquee;
