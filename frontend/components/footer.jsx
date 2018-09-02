import React from 'react';

const Footer = () => {
  return(
    <section className="footer-container">
      <div className="footer">
        <div className="footer-inner">
          <ul className="footer-column">
            <h3 className="footer-header"> By Eli Mordechai</h3>
            <li className="footer-column-item">
              <a className="footer-links" target="_blank" href="https://www.github.com/elimor5">Github</a>
            </li>
            <li className="footer-column-item">
              <a className="footer-links" target="_blank" href="https://www.linkedin.com/in/eli-mordechai">LinkedIn</a>
            </li>
            <li className="footer-column-item">
              <a className="footer-links" target="_blank" href="https://angel.co/eli-mordechai-1">AngelList</a>
            </li>
            <li className="footer-column-item">
              <a className="footer-links" target="_blank" href="https://github.com/Elimor5/illumevents">Illumevents Source Code</a>
            </li>
          </ul>
          <ul className="footer-column flex-middle">
            <h3 className="footer-header"> Other Projects</h3>
            <li className="footer-column-item">
              <a className="footer-links" target="_blank" href="https://github.com/Elimor5/DOMod">DOMod - DOM Manipulation Library</a>
            </li>
            <li className="footer-column-item">
              <a className="footer-links" target="_blank" href="https://elimor5.github.io/DoMod-Demo---Currency-Converter/">Currency Manipulator - DOMod Demo</a>
            </li>
            <li className="footer-column-item">
              <a className="footer-links" target="_blank" href="https://elimor5.github.io/Sports-Pong/">Sports Pong</a>
            </li>
            <li className="footer-column-item">
              <a className="footer-links" target="_blank" href="https://angel.co/eli-mordechai-1">AngelList</a>
            </li>
          </ul>
          <ul className="footer-column">
            <h3 className="footer-header"> Contact</h3>
            <li className="footer-column-item">
              <a className="footer-links" target="_blank" href="mailto:elisha.mordechai@gmail.com">elisha.mordechai@gmail.com</a>
            </li>
            <li className="footer-column-item">
              <a className="footer-links" target="_blank" href="tel:5168590304">Phone: 516-859-0304</a>
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
