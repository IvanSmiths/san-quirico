/* eslint-disable @next/next/no-img-element */
import React from 'react';
import dynamic from 'next/dynamic';

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
        <h3 className="medium-font">Lorem ipsum dolor sit</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos libero
          culpa saepe recusandae ipsa, labore non facere dolor explicabo iusto
          harum eveniet, quaerat incidunt accusamus itaque. Accusamus neque
          architecto, a molestias hic rerum iusto soluta iste, nam, voluptate
          qui cum.
        </p>
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
          <img
            alt={'sito archeologico di san quirico, pozzo'}
            loading={'lazy'}
            decoding={'async'}
            src={'/main-image.jpg'}
            height={'auto'}
            width={'100%'}
          />
        </picture>
        <h4 className="medium-font">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet
          quos impedit eaque perspiciatis illum labore officiis reiciendis, unde
          quis.
        </h4>
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
          <img
            alt={'sito archeologico di san quirico, pozzo'}
            loading={'lazy'}
            decoding={'async'}
            src={'/main-image.jpg'}
            height={'auto'}
            width={'100%'}
          />
        </picture>
        <h5 className="medium-font">Lorem ipsum dolor sit amet</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid
          illo eum, similique distinctio minima adipisci! Quidem delectus ipsa
          exercitationem iste natus ab nemo modi inventore tenetur expedita.{' '}
          <br /> <br /> Ut ea culpa eveniet doloremque eum quibusdam voluptatem
          minus corrupti molestias facere fugiat voluptatum natus similique
          nulla repudiandae, sed quod commodi! Rem.
        </p>
        <div className="form-cnt">
          <h6 className="medium-font highlight-main">Can you help?</h6>
          <form action="https://formsubmit.co/" method="POST" className="form">
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/thank-you-message"
            />
            <input
              type="hidden"
              name="_subject"
              value="San Quirico Archeologia"
            />
            <label htmlFor="name" className="small-font">
              Nome
            </label>
            <input type="text" id="name" name="name" minLength="3" required />
            <label htmlFor="object" className="small-font">
              Oggetto
            </label>
            <input
              type="text"
              id="object"
              name="object"
              minLength="4"
              required
            />
            <label htmlFor="email" className="small-font">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              minLength="6"
              required
            />
            <label className="small-font" htmlFor="message">
              Messaggio
            </label>
            <textarea
              id="message"
              name="message"
              minLength="10"
              cols="30"
              rows="10"
            ></textarea>
            <button className="btn pointer" type="submit">
              Invia
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Ruota;
