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
            srcSet={'/colonna-2.webp'}
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
            src={'/colonna-2.jpg'}
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
            srcSet={'/vaso.webp'}
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
            src={'/croce-altorilievo-3.jpg'}
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
          Reperti e teorie
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
          L{`'`}esposizione ad agenti atmosferici e il tempo trascorso hanno
          cancellato parte dei basso rilievi presenti nell{`'`}oggetto in
          questione: è stato comunque possibile individuare le linee guida
          principali che contraddistinguono la corrente artistico-architettonica
          del periodo di appartenenza dell{`'`}elemento, riscontrando dei
          confronti in oggetti simili rinvenuti nella zona di Cortona. Si tratta
          di un frammento di fenestella o transenna ritrovata all{`'`}interno
          della ex chiesa del monastero di San Vincenzo a Cortona.
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
        <p className="san-quirico-archeologia-bio">
          {' '}
          Nella stessa unità stratigrafica è stato rinvenuto un frammento di
          piccole dimensioni di transenna con decorazioni fitoformi, non
          dissimile a quello sopracitata: anche in questo caso è stato possibile
          riscontare alcune somiglianze con un frammento proveniente dalla
          stessa ex chiesa di San Vincenzo a Cortona. I collegamenti con il
          territorio di Cortona sono ben riscontrabili anche dal ritrovamento di
          una colonnetta con capitello di ottimo pregio. Si tratta di un
          elemento architettonico da interno e puramente decorativo vista le
          dimensioni: è composto da una colonna quadrangolare e un capitello con
          richiami a decorazioni floreali. <br /> <br /> Anche in questo caso il
          tempo e il riutilizzo da parte dell{`'`}uomo hanno cancellato alcuni
          tratti dell{`'`}oggetto, ma è stato comunque possibile eseguire un
          confronto con un elemento simile rinvenuto nella chiesa di Sant
          {`'`}Angelo a Metelliano nel territorio di Cortona. Come già accennato
          nei paragrafi precedenti, le fonti documentarie in nostro possesso
          collocano la Pieve di San Quirico intorno al XII secolo, ma i
          confronti degli oggetti rinvenuti con reperti del territorio di
          Cortona permettono di fornire una datazione antecedente al XII: gli
          elementi architettonici di Cortona, sono infatti datati alla fine del
          VIII e inizi IX secolo.
        </p>

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
              Nella stessa unità stratigrafica è stato rinvenuto un frammento di
              piccole dimensioni di transenna con decorazioni fitoformi, non
              dissimile a quello sopracitata: anche in questo caso è stato
              possibile riscontare alcune somiglianze con un frammento
              proveniente dalla stessa ex chiesa di San Vincenzo a Cortona. I
              collegamenti con il territorio di Cortona sono ben riscontrabili
              anche dal ritrovamento di una colonnetta con capitello di ottimo
              pregio. Si tratta di un elemento architettonico da interno e
              puramente decorativo vista le dimensioni: è composto da una
              colonna quadrangolare e un capitello con richiami a decorazioni
              floreali. <br /> <br /> Anche in questo caso il tempo e il
              riutilizzo da parte dell{`'`}uomo hanno cancellato alcuni tratti
              dell{`'`}oggetto, ma è stato comunque possibile eseguire un
              confronto con un elemento simile rinvenuto nella chiesa di Sant
              {`'`}Angelo a Metelliano nel territorio di Cortona. Come già
              accennato nei paragrafi precedenti, le fonti documentarie in
              nostro possesso collocano la Pieve di San Quirico intorno al XII
              secolo, ma i confronti degli oggetti rinvenuti con reperti del
              territorio di Cortona permettono di fornire una datazione
              antecedente al XII: gli elementi architettonici di Cortona, sono
              infatti datati alla fine del VIII e inizi IX secolo.
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
            srcSet={'/croce-altorilievo-3.webp'}
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
            src={'/vaso.jpg'}
            height={'auto'}
            width={'100%'}
          />
        </picture>
        <div className="form-cnt">
          <motion.h6
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
            Vuoi dare una mano?
          </motion.h6>
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
