/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const Showcase = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="foto-san-quirico-1-cnt">
      <div>
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
          <img
            alt={'sito archeologico di san quirico, pozzo'}
            loading={'lazy'}
            decoding={'async'}
            src={'/main-image.jpg'}
            height={'100%'}
            width={'900px'}
          />
        </picture>{' '}
      </div>
      <div className="foto-san-quirico-1-paragrafo-cnt">
        <motion.div>
          <AnimatePresence>
            <motion.div
              key="question"
              className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div className="text-gray-800 font-bold ml-1">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer et venenatis elit, id iaculis nisl. Vivamus ut maximus
                  sem. Pellentesque vitae sapien ultricies, interdum arcu ac,
                  sagittis quam. Sed ut eros hendrerit, lacinia diam id,
                  pharetra arcu. Vivamus semper luctus malesuada. Donec euismod
                  massa id varius volutpat.
                </p>
                <h3 className="small-font">
                  {isOpen ? '+++' : '+'} Più informazioni
                </h3>
              </motion.div>
            </motion.div>

            {isOpen && (
              <motion.div
                key="answer"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
                exit={{ opacity: 0 }}
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
