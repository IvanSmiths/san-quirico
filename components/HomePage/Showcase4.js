/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Showcase4() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="foto-san-quirico-2-cnt">
        <div className="foto-san-quirico-2-paragrafo-cnt foto-4">
          <h2 className="medium-font">
            <em>+++</em> <br />
            Analisi storica della Pieve di San Quirico
          </h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
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
          <h4 className="medium-font">
            {' '}
            <em>+++</em> <br />
            Decadenza della Pieve
          </h4>
          <p className="small-font">
            La decadenza dell{`'`}edificio sacro fu dovuta probabilmente alla
            sua localizzazione impervia e disagevole, ma soprattutto all{`'`}
            importanza assunta dalla viabilità del fondovalle con la fondazione
            delle {'"'}terre nuove{'"'} sotto la Repubblica fiorentina. <br />{' '}
            <br /> Nel 1424 la pieve era tenuta da
            <strong> Ser Angelo di Nicola da Montepulciano </strong>: le fonti
            indicano a disposizione, indicano che la pieve perse la sua
            importanza nel panorama religioso della zona: le visite pastorali
            infatti confermano le{' '}
            <strong>
              {' '}
              rarissime celebrazioni professate all’interno della struttura{' '}
            </strong>{' '}
            ed inoltre ci informa dello stato di inadeguatezza dell’intero
            complesso.
          </p>
        </div>
        <div className="foto-san-quirico-2-img-cnt foto-archeologica">
          <picture>
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
      </div>
      <div className="foto-4-cnt">
        <div className="foto-4-archeologia">
          <picture className="foto-4-reperti">
            <figcaption className="small-font">
              <em>+ </em>mura del 1200
            </figcaption>
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'700px'}
              width={'400px'}
              srcSet={'/san-quirico-mura-5.webp'}
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
              src={'/san-quirico-mura-5.jpg'}
              height={'700px'}
              width={'400px'}
            />
          </picture>
        </div>
        <div className="foto-4-archeologia foto-archeologica-2">
          <picture className="foto-4-reperti">
            <figcaption className="small-font">
              <em>+ </em>mura del 1200
            </figcaption>
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'700px'}
              width={'400px'}
              srcSet={'/san-quirico-mura-5.webp'}
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
              src={'/san-quirico-mura-5.jpg'}
              height={'700px'}
              width={'400px'}
            />
          </picture>
        </div>
      </div>
    </>
  );
}

export default Showcase4;
