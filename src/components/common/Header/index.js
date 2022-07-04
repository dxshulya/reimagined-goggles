import React from "react";
import { NavLink} from "react-router-dom";

import Logo from "../../../img/Logo.png";

import "./style.scss";

function Header() {

  return (
    <header className="header">
      <div className="header__body">
        <img
          src={Logo}
          className="header__logo"
          alt="Logo"
          width="170"
          height="50"
        />
        <div className="menu">
          {/*<NavLink>*/}
          {/*  Главная*/}
          {/*</NavLink>*/}
          {/*<NavLink>*/}
          {/*  Теория*/}
          {/*</NavLink>*/}
          {/*<NavLink>*/}
          {/*  Тесты*/}
          {/*</NavLink>*/}
          {/*<NavLink>*/}
          {/*  Блог*/}
          {/*</NavLink>*/}
        </div>
      </div>
    </header>
  );
}

export default Header;
