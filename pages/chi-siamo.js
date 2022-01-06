import React from 'react';
import { motion } from 'framer-motion';

const ChiSiamo = () => {
  return (
    <div>
      <div className="chi-siamo-foto-cnt">
        {' '}
        <picture className="chi-siamo-foto">
          <source
            alt={'sito archeologico di san quirico, pozzo'}
            decoding={'async'}
            loading={'lazy'}
            height={'600px'}
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
            height={'600px'}
            width={'100%'}
          />
        </picture>
        <h1 className="small-font descrizione-chi-siamo-foto">
          <em>+ </em>
          chi siamo
        </h1>
      </div>
      <div className="chi-siamo-testo">
        <p className="medium-font">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          nulla fugit laudantium doloremque quos. Consectetur quo et cupiditate
          eligendi numquam necessitatibus nesciunt maiores debitis rerum.
          Molestiae sunt blanditiis eveniet nam!
        </p>
      </div>
      <div className="staff-cnt">
        <div className="staff-container">
          {' '}
          <picture className="staff-foto">
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'757px'}
              width={'505px'}
              srcSet={'/team.webp'}
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
              src={'/team.jpg'}
              height={'757px'}
              width={'505px'}
            />
          </picture>
          <h2 className="small-font">
            <em>Francesca Fabbrini</em> - Capo supremo
          </h2>
          <p className="small-font">
            Lorem ipsum dolor sit amet consectetur adipisicing edivt. Ducimus a
            necessitatibus distinctio impedit minima enim dolorum suscipit nobis
            voluptatibus reprehenderit nostrum sunt placeat ad laboriosam
            dolorem dolore dolor, odio iusto laudantium fugit, maiores illo.
            Debitis officia pariatur dolorem assumenda expdivcabo.
          </p>
          <a href="mailto:francesca@gmail.com">francesca@gmail.com</a>
        </div>
        <div className="staff-container">
          {' '}
          <picture className="staff-foto">
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'757px'}
              width={'505px'}
              srcSet={'/team.webp'}
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
              src={'/team.jpg'}
              height={'757px'}
              width={'505px'}
            />
          </picture>
          <h2 className="small-font">
            <em>Francesca Fabbrini</em> - Capo supremo
          </h2>
          <p className="small-font">
            Lorem ipsum dolor sit amet consectetur adipisicing edivt. Ducimus a
            necessitatibus distinctio impedit minima enim dolorum suscipit nobis
            voluptatibus reprehenderit nostrum sunt placeat ad laboriosam
            dolorem dolore dolor, odio iusto laudantium fugit, maiores illo.
            Debitis officia pariatur dolorem assumenda expdivcabo.
          </p>
          <a href="mailto:francesca@gmail.com">francesca@gmail.com</a>
        </div>
        <div className="staff-container">
          {' '}
          <picture className="staff-foto">
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'757px'}
              width={'505px'}
              srcSet={'/team.webp'}
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
              src={'/team.jpg'}
              height={'757px'}
              width={'505px'}
            />
          </picture>
          <h2 className="small-font">
            <em>Francesca Fabbrini</em> - Capo supremo
          </h2>
          <p className="small-font">
            Lorem ipsum dolor sit amet consectetur adipisicing edivt. Ducimus a
            necessitatibus distinctio impedit minima enim dolorum suscipit nobis
            voluptatibus reprehenderit nostrum sunt placeat ad laboriosam
            dolorem dolore dolor, odio iusto laudantium fugit, maiores illo.
            Debitis officia pariatur dolorem assumenda expdivcabo.
          </p>
          <a href="mailto:francesca@gmail.com">francesca@gmail.com</a>
        </div>
        <div className="staff-container">
          {' '}
          <picture className="staff-foto">
            <source
              alt={'sito archeologico di san quirico, pozzo'}
              decoding={'async'}
              loading={'lazy'}
              height={'757px'}
              width={'505px'}
              srcSet={'/team.webp'}
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
              src={'/team.jpg'}
              height={'757px'}
              width={'505px'}
            />
          </picture>
          <h2 className="small-font">
            <em>Francesca Fabbrini</em> - Capo supremo
          </h2>
          <p className="small-font">
            Lorem ipsum dolor sit amet consectetur adipisicing edivt. Ducimus a
            necessitatibus distinctio impedit minima enim dolorum suscipit nobis
            voluptatibus reprehenderit nostrum sunt placeat ad laboriosam
            dolorem dolore dolor, odio iusto laudantium fugit, maiores illo.
            Debitis officia pariatur dolorem assumenda expdivcabo.
          </p>
          <a href="mailto:francesca@gmail.com">francesca@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default ChiSiamo;
