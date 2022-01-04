/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <main id="about" className="main-cnt flex-center">
      <div className="test-cnt">
        <motion.p
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
          La Pieve di{' '}
          <motion.picture
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className={'main-paragraph-image'}
          >
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'100%'}
              width={'160px'}
              srcSet={'/main-image.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/main-image.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          San Quirico in Alfiano,{' '}
          <motion.picture
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className={'main-paragraph-image'}
          >
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'100%'}
              width={'160px'}
              srcSet={'/main-image.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/main-image.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          conosciuta anche come Pieve di San Quirico Sopr{'`'}Arno{' '}
          <motion.picture
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className={'main-paragraph-image'}
          >
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'100%'}
              width={'160px'}
              srcSet={'/main-image.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/main-image.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          è un{' '}
          <motion.picture
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className={'main-paragraph-image'}
          >
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'100%'}
              width={'160px'}
              srcSet={'/main-image.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/main-image.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          edificio sacro, la cui prima documentazione{' '}
          <motion.picture
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className={'main-paragraph-image'}
          >
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'100%'}
              width={'160px'}
              srcSet={'/main-image.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/main-image.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          risale al 1099.{' '}
          <motion.picture
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className={'main-paragraph-image'}
          >
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'100%'}
              width={'160px'}
              srcSet={'/main-image.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/main-image.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          Sito nei pressi di Castiglion Fibocchi {'('}Arezzo, Toscana{')'}{' '}
          <motion.picture
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className={'main-paragraph-image'}
          >
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'100%'}
              width={'160px'}
              srcSet={'/main-image.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/main-image.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          in località{' '}
          <motion.picture
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className={'main-paragraph-image'}
          >
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'100%'}
              width={'160px'}
              srcSet={'/main-image.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/main-image.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          “Pié San Chierco”, è in continua ristrutturazione{' '}
          <motion.picture
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className={'main-paragraph-image'}
          >
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'100%'}
              width={'160px'}
              srcSet={'/main-image.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/main-image.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          da parte di San Quirico Archeologia{' '}
          <motion.picture
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className={'main-paragraph-image'}
          >
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'100%'}
              width={'160px'}
              srcSet={'/main-image.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/main-image.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          dal 2013 per mantenerne il decoro.
        </motion.p>
      </div>
    </main>
  );
};

export default About;
