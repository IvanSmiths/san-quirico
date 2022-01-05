import React, { useState } from 'react';
import { motion } from 'framer-motion';
const Paragraph = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="san-quirico-descrizione-cnt">
      <div className="san-quirico-descrizione-1">
        <picture className="immagine-paragrafo">
          <source
            alt={'sito archeologico di san quirico, pozzo'}
            decoding={'async'}
            loading={'lazy'}
            height={'300px'}
            width={'100%'}
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
            src={'/san-quirico-mura-5.png'}
            height={'300px'}
            width={'100%'}
          />
        </picture>
        <picture className="immagine-paragrafo immagine-paragrafo2">
          <source
            alt={'sito archeologico di san quirico, pozzo'}
            decoding={'async'}
            loading={'lazy'}
            height={'300px'}
            width={'100%'}
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
            src={'/main-image.jpg'}
            height={'300px'}
            width={'100%'}
          />
        </picture>
        <picture className="immagine-paragrafo immagine-paragrafo2">
          <source
            alt={'sito archeologico di san quirico, pozzo'}
            decoding={'async'}
            loading={'lazy'}
            height={'300px'}
            width={'100%'}
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
            src={'/main-image.jpg'}
            height={'300px'}
            width={'100%'}
          />
        </picture>
      </div>
      <div className="san-quirico-descrizione-2">
        <motion.h2
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
        >
          La pieve è <strong> documentata per la prima volta nel 1099 </strong>{' '}
          in un atto di donazione di un pezzo di terra posto {'"'}infra plebe
          sancti kirici sita Alfiano{'"'}: successivamente abbiamo notizia nel
          1131 e nuovamente nel 1136 dove viene ricordata più volte anche per le
          sue sei chiese suffraganee.
        </motion.p>
        <motion.h4
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
              Nel 1302 invece le chiese diventano sei, e la Pieve annovera anche
              le chiese di:
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
        <h3 className="medium-font">Decadenza della Pieve</h3>
        <p className="small-font">
          La decadenza dell{`'`}edificio sacro fu dovuta probabilmente alla sua
          localizzazione impervia e disagevole, ma soprattutto all{`'`}
          importanza assunta dalla viabilità del fondovalle con la fondazione
          delle {'"'}terre nuove{'"'} sotto la Repubblica fiorentina. <br />{' '}
          <br /> Nel 1424 la pieve era tenuta da
          <strong> Ser Angelo di Nicola da Montepulciano </strong>: le fonti
          indicano a disposizione, indicano che la pieve perse la sua importanza
          nel panorama religioso della zona: le visite pastorali infatti
          confermano le{' '}
          <strong>
            {' '}
            rarissime celebrazioni professate all’interno della struttura{' '}
          </strong>{' '}
          ed inoltre ci informa dello stato di inadeguatezza dell’intero
          complesso.
        </p>
      </div>
      <div className="san-quirico-descrizione-3">
        {' '}
        <picture className="immagine-paragrafo immagine-paragrafo-3">
          <source
            alt={'sito archeologico di san quirico, pozzo'}
            decoding={'async'}
            loading={'lazy'}
            height={'300px'}
            width={'100%'}
            srcSet={'/san-quirico-mura-2.webp'}
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
            src={'/san-quirico-mura-2.png'}
            height={'300px'}
            width={'100%'}
          />
        </picture>
        <picture className="immagine-paragrafo immagine-paragrafo-4">
          <source
            alt={'sito archeologico di san quirico, pozzo'}
            decoding={'async'}
            loading={'lazy'}
            height={'300px'}
            width={'100%'}
            srcSet={'/san-quirico-mura-3.webp'}
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
            src={'/san-quirico-mura-3.png'}
            height={'300px'}
            width={'100%'}
          />
        </picture>
        <picture className="immagine-paragrafo immagine-paragrafo-5">
          <source
            alt={'sito archeologico di san quirico, pozzo'}
            decoding={'async'}
            loading={'lazy'}
            height={'300px'}
            width={'100%'}
            srcSet={'/san-quirico-mura-6.webp'}
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
            src={'/san-quirico-mura-6.jpg'}
            height={'300px'}
            width={'100%'}
          />
        </picture>
      </div>
    </main>
  );
};

export default Paragraph;
