import React from "react";
import { NavLink } from "react-router-dom";

import {
  MAIN_LINK,
} from "../../../router/links";

import "./style.scss";

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__body">
        <div className="emailBlock">
          Для связи с администрацией:{" "}
        </div>
        <div className="menu">
          {/*<NavLink exact className="menu__elemen" to={MAIN_LINK}>*/}
          {/*  Главная*/}
          {/*</NavLink>*/}
          {/*<NavLink exact className="menu__elemen">*/}
          {/*  Теория*/}
          {/*</NavLink>*/}
          {/*<NavLink exact className="menu__elemen">*/}
          {/*  Тесты*/}
          {/*</NavLink>*/}
          {/*<NavLink exact className="menu__elemen">*/}
          {/*  Блог*/}
          {/*</NavLink>*/}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
