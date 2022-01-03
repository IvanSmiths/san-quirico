import React, { useState } from 'react';
import { motion } from 'framer-motion';
const Paragraph = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="san-quirico-descrizione-cnt">
      <div className="san-quirico-descrizione-1">dwadaw</div>
      <div className="san-quirico-descrizione-2">
        <h2 className="medium-font">Lorem, ipsum dolor.</h2>
        <p className="small-font">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
          aspernatur magnam deserunt. Totam minima itaque in reiciendis laborum
          aliquid nam doloribus rem voluptatibus, delectus iure, veniam
          similique fugit atque illum libero adipisci officiis exercitationem
          unde officia animi vero magnam. Omnis velit pariatur est eligendi vero
          aut corrupti temporibus quibusdam dolor non! <br />
          Nel 1278 la pieve di San Quirico supra Arnum aveva{' '}
          <strong> quattro chiese suffraganee</strong>, di cui ricordiamo:
        </p>
        <ol className="lista-chiese-container">
          <li>Chiesa di San Silvestro de Polveki (casa Politi);</li>
          <li>Chiesa di San Pietro a Peççano (Pezzano);</li>
          <li>Chiesa di San Paolo di Pontenano;</li>
          <li>Chiesa di Sant’Ilario di Castiglion Fibocchi.</li>
        </ol>
        Nel 1302 invece le chiese diventano sei, e la Pieve annovera anche le
        chiese di:
        <ol className="lista-chiese-container">
          <li>Sant’Angelo di Ferrallia (Feraglia)</li>
          <li>San Giovanni di Gello Viscardi (Biscardo)</li>
        </ol>
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
              <strong> quattro chiese suffraganee</strong>, di cui ricordiamo:
            </p>
            <ol className="lista-chiese-container">
              <li>Chiesa di San Silvestro de Polveki (casa Politi);</li>
              <li>Chiesa di San Pietro a Peççano (Pezzano);</li>
              <li>Chiesa di San Paolo di Pontenano;</li>
              <li>Chiesa di Sant’Ilario di Castiglion Fibocchi.</li>
            </ol>
            Nel 1302 invece le chiese diventano sei, e la Pieve annovera anche
            le chiese di:
            <ol className="lista-chiese-container">
              <li>Sant’Angelo di Ferrallia (Feraglia)</li>
              <li>San Giovanni di Gello Viscardi (Biscardo)</li>
            </ol>
          </motion.div>
        )}
        <h3 className="medium-font">Lorem ipsum dolor sit amet.</h3>
        <p className="small-font">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
          aspernatur magnam deserunt. Totam minima itaque in reiciendis laborum
          aliquid nam doloribus rem voluptatibus, delectus iure, veniam
          similique fugit atque illum libero adipisci officiis exercitationem
          unde officia animi vero magnam. Omnis velit pariatur est eligendi vero
          aut corrupti temporibus quibusdam dolor non! <br />
          <br /> Dolores, assumenda. Ullam nisi tenetur dicta, molestiae
          cupiditate reiciendis odio molestias fuga. Sit quas odit fugiat quasi!
          Praesentium debitis, odio nobis est numquam vero accusantium voluptas
          at perferendis possimus cum! Quia voluptatum dolorum nemo minima
          tempora ullam veniam dolor expedita, mollitia explicabo voluptates
          praesentium error consectetur velit ipsam odit.
        </p>
      </div>
      <div className="san-quirico-descrizione-3">awdaw</div>
    </main>
  );
};

export default Paragraph;
