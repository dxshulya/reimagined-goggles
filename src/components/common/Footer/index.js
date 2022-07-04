import React from "react";

import "./style.scss";

import Logo from "../../../img/LightLogo.png";

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__wrapper">
          <img className="logo" src={Logo} alt="Logo" width="160" height="48"/>

          <ul className="pages">
              <a className="title">PAGES</a>
              <li className="subtitle">Home</li>
              <li className="subtitle">Shop</li>
              <li className="subtitle">Categories</li>
              <li className="subtitle">Buyer's guides</li>
              <li className="subtitle">404</li>
              <li className="subtitle">Password</li>
          </ul>

          <div className="categories">
              <a className="title">Gear categories</a>
              <li className="subtitle">Hiking Gear</li>
              <li className="subtitle">Climbing Gear</li>
              <li className="subtitle">Jackets</li>
              <li className="subtitle">Accessories</li>
              <li className="subtitle">Apparel</li>
              <li className="subtitle">Headwear</li>
          </div>
          <div className="company">
              <a className="title">Company</a>
              <li className="subtitle">About us</li>
              <li className="subtitle">Our team</li>
              <li className="subtitle">Contact</li>
              <li className="subtitle">Terms & Conditions</li>
              <li className="subtitle">Style guide</li>
              <li className="subtitle">Licenses</li>
          </div>
          <div className="newsletter">
              <a className="title">Newsletter</a>
              <p className="subtitle">Subscribe to our (infrequent) newsletter where we share news about upcoming listings and projects.</p>

          </div>
          {/*<div className="powered">*/}
          {/*      <p className="subtitle">© Outdoor Exploration, LLC. All rights reserved. Powered by</p>*/}
          {/*</div>*/}
          {/*<div className="socials">*/}

          {/*</div>*/}
      </div>
    </footer>
  );
}

export default Footer;
