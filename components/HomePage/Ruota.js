/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Model = dynamic(
  () => {
    return import('./Model');
  },
  { ssr: false }
);

function Ruota() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <div className="ruota-cnt">
      <div className="cnt-model">
        <Model />
      </div>
      <div className="ruota-paragrafo-cnt">
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
          Analisi dei reperti
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
          Il sondaggio condotto nell{`'`}anno 2013 all{`'`}interno del contesto
          della Pieve di San Quirico in Alfiano nel comune di Castiglion
          Fibocchi, ha restituito una notevole quantità di reperti archeologici
          di vario pregio e interesse scientifico. Durante l{`'`}asportazione
          dello strato di Humus detriti e crollo (US 1001) sono venuti alla luce
          molti oggetti di arredo religioso in materiale lapideo. <br />
          <br />
          Per alcuni di questi è stato possibile riconoscerne lo stile e quindi
          attribuirne una cronologia, per altri invece saranno necessari studi
          più mirati ed approfonditi.
        </motion.p>
        <motion.div>
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
            {isOpen ? 'Meno' : 'Più'} informazioni
          </motion.h4>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et venenatis elit, id iaculis nisl. Vivamus ut maximus sem.
              Pellentesque vitae sapien ultricies, interdum arcu ac, sagittis
              quam. Sed ut eros hendrerit, lacinia diam id, pharetra arcu.
              Vivamus semper luctus malesuada. Donec euismod massa id varius
              volutpat. <br /> <br /> Vivamus porta egestas mauris, in mollis
              massa porttitor a. Etiam consectetur vulputate metus, quis gravida
              ligula maximus sed. Donec vulputate leo mauris, a dapibus mauris
              ultrices sed. Integer neque odio, tincidunt at egestas nec, tempus
              et nisl.
            </p>
          </motion.div>
        )}
        <picture className="cover">
          <source
            alt={'sito archeologico di san quirico, pozzo'}
            decoding={'async'}
            loading={'lazy'}
            height={'auto'}
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
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            alt={'sito archeologico di san quirico, pozzo'}
            loading={'lazy'}
            decoding={'async'}
            src={'/main-image.jpg'}
            height={'auto'}
            width={'100%'}
          />
        </picture>
        <motion.h4
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
          Il primo oggetto rinvenuto è una porzione di transenna di forma
          trapezoidale con elementi decorativi fitoformi, in pietra arenaria.
        </motion.h4>
        <picture className="cover">
          <source
            alt={'sito archeologico di san quirico, pozzo'}
            decoding={'async'}
            loading={'lazy'}
            height={'auto'}
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
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            alt={'sito archeologico di san quirico, pozzo'}
            loading={'lazy'}
            decoding={'async'}
            src={'/main-image.jpg'}
            height={'auto'}
            width={'100%'}
          />
        </picture>
        <motion.h5
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
          Lorem ipsum dolor sit amet
        </motion.h5>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid
          illo eum, similique distinctio minima adipisci! Quidem delectus ipsa
          exercitationem iste natus ab nemo modi inventore tenetur expedita.{' '}
          <br /> <br /> Ut ea culpa eveniet doloremque eum quibusdam voluptatem
          minus corrupti molestias facere fugiat voluptatum natus similique
          nulla repudiandae, sed quod commodi! Rem.
        </motion.p>
        <motion.div>
          <motion.h4
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => setIsOpen2(!isOpen2)}
            className="small-font accordion pointer"
          >
            <em className="segno-addizione">{isOpen2 ? '+++' : '+'}</em>
            {isOpen2 ? 'Meno' : 'Più'} informazioni
          </motion.h4>
        </motion.div>

        {isOpen2 && (
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
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et venenatis elit, id iaculis nisl. Vivamus ut maximus sem.
              Pellentesque vitae sapien ultricies, interdum arcu ac, sagittis
              quam. Sed ut eros hendrerit, lacinia diam id, pharetra arcu.
              Vivamus semper luctus malesuada. Donec euismod massa id varius
              volutpat. <br /> <br /> Vivamus porta egestas mauris, in mollis
              massa porttitor a. Etiam consectetur vulputate metus, quis gravida
              ligula maximus sed. Donec vulputate leo mauris, a dapibus mauris
              ultrices sed. Integer neque odio, tincidunt at egestas nec, tempus
              et nisl.
            </p>
          </motion.div>
        )}
        <div className="form-cnt">
          <motion.h5
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="medium-font highlight-main"
          >
            Can you help?
          </motion.h5>
          <form action="https://formsubmit.co/" method="POST" className="form">
            <motion.input
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              type="hidden"
              name="_next"
              value="http://localhost:3000/thank-you-message"
            />
            <motion.input
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              type="hidden"
              name="_subject"
              className="small-font"
              value="San Quirico Archeologia"
            />
            <motion.label
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              htmlFor="name"
              className="small-font"
            >
              Nome
            </motion.label>
            <motion.input
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              type="text"
              id="name"
              name="name"
              minLength="3"
              className="small-font"
              required
            />
            <motion.label
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              htmlFor="object"
              className="small-font"
            >
              Oggetto
            </motion.label>
            <motion.input
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              type="text"
              id="object"
              name="object"
              minLength="3"
              className="small-font"
              required
            />
            <motion.label
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              htmlFor="email"
              className="small-font"
            >
              Email
            </motion.label>
            <motion.input
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              type="email"
              className="small-font"
              id="email"
              name="email"
              minLength="6"
              required
            />
            <motion.label
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="small-font"
              htmlFor="message"
            >
              Messaggio
            </motion.label>
            <motion.textarea
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              id="message"
              className="small-font"
              name="message"
              minLength="10"
              cols="30"
              rows="10"
            ></motion.textarea>
            <motion.button
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="btn small-font pointer"
              type="submit"
            >
              Invia
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Ruota;
