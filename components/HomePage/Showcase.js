/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
                Analisi storica della Pieve di San Quirico
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
                La pieve è{' '}
                <strong> documentata per la prima volta nel 1099 </strong> in un
                atto di donazione di un pezzo di terra posto {'"'}infra plebe
                sancti kirici sita Alfiano{'"'}: successivamente abbiamo notizia
                nel 1131 e nuovamente nel 1136 dove viene ricordata più volte
                anche per le sue sei chiese suffraganee.
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
                {isOpen ? 'Meno' : 'Più'} informazioni sulle chiese
              </motion.h4>

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
                    Nel 1278 la pieve di San Quirico supra Arnum aveva{' '}
                    <strong> quattro chiese suffraganee</strong>, di cui
                    ricordiamo:
                  </p>
                  <ol className="lista-chiese-container">
                    <li>Chiesa di San Silvestro de Polveki (casa Politi);</li>
                    <li>Chiesa di San Pietro a Peççano (Pezzano);</li>
                    <li>Chiesa di San Paolo di Pontenano;</li>
                    <li>Chiesa di Sant’Ilario di Castiglion Fibocchi.</li>
                  </ol>
                  Nel 1302 invece le chiese diventano sei, e la Pieve annovera
                  anche le chiese di:
                  <ol className="lista-chiese-container">
                    <li>Sant’Angelo di Ferrallia (Feraglia)</li>
                    <li>San Giovanni di Gello Viscardi (Biscardo)</li>
                  </ol>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Showcase;
