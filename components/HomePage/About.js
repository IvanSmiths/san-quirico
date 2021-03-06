/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="main-cnt flex-center">
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
          La Pieve di San Quirico{' '}
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
              srcSet={'/san-quirico-ristrutturazione-3.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/san-quirico-ristrutturazione-3.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          in Alfiano,{' '}
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
              srcSet={'/san-quirico-ristrutturazione-2.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/san-quirico-ristrutturazione-2.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          ?? un edificio sacro, la cui prima{' '}
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
              srcSet={'/resti-scavi-archeologici-3.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/resti-scavi-archeologici-3.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          documentazione{' '}
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
              srcSet={'/croce-altorilievo.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/croce-altorilievo.jpg'}
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
              srcSet={'/colonna.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/colonna.jpg'}
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
              srcSet={'/san-quirico-mura-5.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/san-quirico-mura-5.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          ?? in continua ristrutturazione dal 2013{' '}
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
              srcSet={'/san-quirico-mura-2.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/san-quirico-mura-2.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          dal team{' '}
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
              srcSet={'/san-quirico-mura-3.webp'}
              type="image/webp"
            />
            <img
              alt={'sito archeologico di san quirico, pozzo'}
              loading={'lazy'}
              decoding={'async'}
              src={'/san-quirico-mura-3.jpg'}
              height={'100%'}
              width={'160px'}
            />
          </motion.picture>{' '}
          San Quirico Archeologia per mantenerne il decoro.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
