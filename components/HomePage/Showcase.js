/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Showcase = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="foto-san-quirico-1-cnt">
      <div className="foto-san-quirico-1">
        <picture className="cover">
          <source
            alt={'sito archeologico di san quirico, pozzo'}
            decoding={'async'}
            loading={'lazy'}
            height={'100%'}
            width={'900px'}
            srcSet={'/main-image.webp'}
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
            src={'/main-image.jpg'}
            height={'100%'}
            width={'900px'}
          />
        </picture>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="small-font descrizione-foto"
        >
          + San Quirico - Pozzo
        </motion.h2>
      </div>
      <div className="foto-san-quirico-1-paragrafo-cnt">
        <motion.div>
          <motion.div>
            <motion.div>
              <motion.h3
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
                Lorem ipsum dolor sit amet.
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque et ipsum, nostrum dicta incidunt quod tempora tenetur
                dignissimos harum, hic iste iure? Maxime dolores assumenda optio
                cum excepturi. <br />
                <br /> Fugit cupiditate eligendi blanditiis eveniet delectus
                minima aut eius alias corrupti ex? Quis iure rerum, modi enim
                fuga vero nisi, consectetur perferendis, repellendus ipsam
                dolore? Tempora vitae, mollitia eius culpa ratione perferendis.{' '}
                <br /> <br /> Fugit cupiditate eligendi blanditiis eveniet
                delectus minima aut eius alias corrupti ex? Quis iure rerum,
                modi enim fuga vero nisi, consectetur perferendis, repellendus
                ipsam dolore? Tempora vitae, mollitia eius culpa ratione
                perferendis.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Showcase;
