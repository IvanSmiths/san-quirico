/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Showcase4() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="foto-san-quirico-2-cnt">
        <div className="foto-san-quirico-2-img-cnt foto-archeologica-2">
          <picture className="test2">
            <motion.figcaption
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="small-font caption-scheletro"
            >
              <em>+ </em>ritrovamento di uno scheletro
            </motion.figcaption>
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'700px'}
              width={'100%'}
              srcSet={'/archeologia-reperti(20).webp'}
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
              src={'/archeologia-reperti(20).jpg'}
              height={'700px'}
              width={'100%'}
            />
          </picture>
        </div>
        <div className="foto-san-quirico-2-paragrafo-cnt foto-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="medium-font impact"
          >
            <em>+++</em> <br />
            Analisi storica della Pieve di San Quirico
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="small-font"
          >
            <br /> La decadenza dell{`'`}edificio sacro fu dovuta probabilmente
            alla sua localizzazione impervia e disagevole, ma soprattutto all
            {`'`}
            importanza assunta dalla viabilità del fondovalle con la fondazione
            delle {'"'}terre nuove{'"'} sotto la Repubblica fiorentina.
          </motion.p>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => setIsOpen(!isOpen)}
            className="small-font accordion pointer"
          >
            <em className="segno-addizione">{isOpen ? '+++' : '+'}</em>
            {isOpen ? 'Meno' : 'Più'} informazioni sulle chiese
          </motion.h3>
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
              <motion.ol
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7, staggerChildren: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="lista-chiese-container"
              >
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  Chiesa di San Silvestro de Polveki (casa Politi);
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  Chiesa di San Pietro a Peççano (Pezzano);
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  Chiesa di San Paolo di Pontenano;
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  Chiesa di Sant’Ilario di Castiglion Fibocchi.
                </motion.li>
              </motion.ol>
              <motion.h5
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="small-font"
              >
                Nel 1302 invece le chiese diventano sei, e la Pieve annovera
                anche le chiese di:
              </motion.h5>
              <motion.ol
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7, staggerChildren: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="lista-chiese-container"
              >
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  Sant’Angelo di Ferrallia (Feraglia)
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  San Giovanni di Gello Viscardi (Biscardo)
                </motion.li>
              </motion.ol>
            </motion.div>
          )}
          <picture className="test2">
            <motion.figcaption
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="small-font caption-scheletro"
            >
              <em>+ </em>ritrovamento di uno scheletro
            </motion.figcaption>
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'400px'}
              width={'100%'}
              srcSet={'/archeologia-reperti(20).webp'}
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
              src={'/archeologia-reperti(20).jpg'}
              height={'400px'}
              width={'100%'}
            />
          </picture>{' '}
        </div>
      </div>
    </>
  );
}

export default Showcase4;
