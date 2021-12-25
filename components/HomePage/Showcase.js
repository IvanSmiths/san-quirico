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
          <AnimatePresence>
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cumque corrupti quaerat dolorem eius odio facilis, maiores
                  fugit voluptate quibusdam iste.
                </motion.p>
                <motion.h4
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="small-font accordion pointer"
                >
                  <em className="segno-addizione">{isOpen ? '+++' : '+'}</em>
                  {isOpen ? 'Meno' : 'Più'} informazioni
                </motion.h4>
              </motion.div>
            </motion.div>

            {isOpen && (
              <motion.div
                key="answer"
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                }}
                exit={{ opacity: 0, y: 100 }}
                className="p-2 text-lg text-gray-700 border-l border-b border-gray-300"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer et venenatis elit, id iaculis nisl. Vivamus ut maximus
                  sem. Pellentesque vitae sapien ultricies, interdum arcu ac,
                  sagittis quam. Sed ut eros hendrerit, lacinia diam id,
                  pharetra arcu. Vivamus semper luctus malesuada. Donec euismod
                  massa id varius volutpat. <br /> <br /> Vivamus porta egestas
                  mauris, in mollis massa porttitor a. Etiam consectetur
                  vulputate metus, quis gravida ligula maximus sed. Donec
                  vulputate leo mauris, a dapibus mauris ultrices sed. Integer
                  neque odio, tincidunt at egestas nec, tempus et nisl.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Showcase;
