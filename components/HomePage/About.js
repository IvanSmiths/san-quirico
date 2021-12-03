import React from 'react';
import ImageComponent from '../ImageComponent';
const About = () => {
  return (
    <main className="main-cnt flex-center">
      <div className="flex-center">
        <p className="medium-font">Lorem ipsum dolor sit amet,</p>
        <ImageComponent
          src={'/main-image.jpg'}
          webp={'/main-image.webp'}
          height={'100%'}
          width={'160px'}
          alt={'sito archeologico di san quirico, pozzo'}
          className={'main-paragraph-image'}
        />
        <p className="medium-font">consectetur adipiscing elit.</p>
        <ImageComponent
          src={'/main-image.jpg'}
          webp={'/main-image.webp'}
          height={'100%'}
          width={'160px'}
          alt={'sito archeologico di san quirico, pozzo'}
          className={'main-paragraph-image'}
        />
        <p className="medium-font">Pellentesque nulla ipsum,</p>
        <ImageComponent
          src={'/main-image.jpg'}
          webp={'/main-image.webp'}
          height={'100%'}
          width={'160px'}
          alt={'sito archeologico di san quirico, pozzo'}
          className={'main-paragraph-image'}
        />
        <p className="medium-font">
          Morbi dignissim, sit Curabitur felis nisl, rhoncus vel Lorem ipsum
          dolor sit amet,
        </p>

        <ImageComponent
          src={'/main-image.jpg'}
          webp={'/main-image.webp'}
          height={'100%'}
          width={'160px'}
          alt={'sito archeologico di san quirico, pozzo'}
          className={'main-paragraph-image'}
        />
        <p className="medium-font">consectetur adipiscing elit.</p>
        <ImageComponent
          src={'/main-image.jpg'}
          webp={'/main-image.webp'}
          height={'100%'}
          width={'160px'}
          alt={'sito archeologico di san quirico, pozzo'}
          className={'main-paragraph-image'}
        />
        <p className="medium-font">Pellentesque nulla ipsum,</p>
        <ImageComponent
          src={'/main-image.jpg'}
          webp={'/main-image.webp'}
          height={'100%'}
          width={'160px'}
          alt={'sito archeologico di san quirico, pozzo'}
          className={'main-paragraph-image'}
        />
        <p className="medium-font">Pellentesque nulla ipsum,</p>
        <ImageComponent
          src={'/main-image.jpg'}
          webp={'/main-image.webp'}
          height={'100%'}
          width={'160px'}
          alt={'sito archeologico di san quirico, pozzo'}
          className={'main-paragraph-image'}
        />
        <p className="medium-font">Morbi dignissim, sit</p>
        <ImageComponent
          src={'/main-image.jpg'}
          webp={'/main-image.webp'}
          height={'100%'}
          width={'160px'}
          alt={'sito archeologico di san quirico, pozzo'}
          className={'main-paragraph-image'}
        />
        <p className="medium-font">Curabitur felis nisl, rhoncus vel</p>
      </div>
    </main>
  );
};

export default About;
