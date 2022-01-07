/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Showcase = () => {
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
        <motion.figcaption
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
          <em>+ </em>San Quirico - Pozzo
        </motion.figcaption>
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
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="medium-font"
              >
                Analisi storica della Pieve di San Quirico
              </motion.h3>
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
                La pieve è{' '}
                <strong> documentata per la prima volta nel 1099 </strong> in un
                atto di donazione di un pezzo di terra posto {'"'}infra plebe
                sancti kirici sita Alfiano{'"'}: successivamente abbiamo notizia
                nel 1131 e nuovamente nel 1136 dove viene ricordata più volte
                anche per le sue sei chiese suffraganee.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Showcase;
