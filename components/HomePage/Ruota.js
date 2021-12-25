/* eslint-disable @next/next/no-img-element */
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Model = dynamic(
  () => {
    return import('./Model');
  },
  { ssr: false }
);

function Ruota() {
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
          Lorem ipsum dolor sit
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos libero
          culpa saepe recusandae ipsa, labore non facere dolor explicabo iusto
          harum eveniet, quaerat incidunt accusamus itaque. Accusamus neque
          architecto, a molestias hic rerum iusto soluta iste, nam, voluptate
          qui cum.
        </motion.p>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet
          quos impedit eaque perspiciatis illum labore officiis reiciendis, unde
          quis.
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
            Can you help?
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
              value="San Quirico Archeologia"
            />
            <motion.label
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
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
              required
            />
            <motion.label
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
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
              minLength="4"
              required
            />
            <motion.label
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
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
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="small-font"
              htmlFor="message"
            >
              Messaggio
            </motion.label>
            <motion.textarea
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              id="message"
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
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="btn pointer"
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
