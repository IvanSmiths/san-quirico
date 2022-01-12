import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <footer
        className="footer"
        style={{ minHeight: `${isOpen ? '120vh' : '100vh'}` }}
      >
        <div className="footer-email">
          <span
            style={{ marginBottom: `${isOpen ? '8rem' : '1rem'}` }}
            onClick={() => setIsOpen(!isOpen)}
            className="large-font impact"
          >
            <motion.em
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                },
              }}
            >
              {isOpen ? '+++' : '+'}
            </motion.em>
            EMAIL
          </span>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0, y: 100 }}
              className=""
            >
              <a className="small-font" href="mailto:sanquirico@gmail.com">
                info@sanquiricoarcheologia.com
              </a>
            </motion.div>
          )}
        </div>
        <div className="divider"></div>
        <div className="footer-informazioni">
          <div>
            <span className="tiny-font">home / chi siamo</span>
          </div>
          <div>
            <span className="tiny-font">
              copyright 2022 san quirico archeologia
            </span>
          </div>
          <div>
            <span className="tiny-font">deign & code by ivan smiths</span>
          </div>
        </div>
      </footer>
    </AnimatePresence>
  );
};

export default Footer;
