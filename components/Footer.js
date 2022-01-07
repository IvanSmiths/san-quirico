import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-email">
        <a className="large-font" href="mailto:sanquirico@gmail.com">
          <em>+ </em> EMAIL
        </a>
      </div>
      <div className="divider"></div>
      <div className="footer-informazioni">
        <div>
          <span className="tiny-font">home / chi siamo</span>
        </div>
        <div>
          <span className="tiny-font">
            copyright 2022 san quirico archeologia
          </span>
        </div>
        <div>
          <span className="tiny-font">deign & code by ivan smiths</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
