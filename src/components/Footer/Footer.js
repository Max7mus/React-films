import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../../routes/Home';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="foot">
        <div className="foot-name">
          <span>KinoLux</span>
        </div>
        <ul className="foot-list">
          <li className="foot-item">
            <i class="fa-brands fa-facebook-f"></i>
          </li>
          <li className="foot-item">
            <i class="fa-brands fa-twitter"></i>
          </li>
          <li className="foot-item">
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li className="foot-item">
            <i class="fa-brands fa-youtube"></i>
          </li>
        </ul>
        <div className="foot-rights">
          <span> &copy; 2022 All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
