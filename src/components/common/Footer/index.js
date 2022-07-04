import React from "react";

import "./style.scss";

import Logo from "../../../img/LightLogo.png";

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__wrapper">
          <img className="logo" src={Logo} alt="Logo" width="160" height="48"/>
      </div>
    </footer>
  );
}

export default Footer;
