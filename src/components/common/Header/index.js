import React from "react";

import Logo from "../../../img/Logo.png";
import Icon from "../../../img/icon.svg";

import "./style.scss";

function Header() {

    return (
        <header className="header">
            <div className="header__wrapper">
                <img className="logo" src={Logo} alt="Logo" width="128" height="39"/>
                <div className="menu">
                    <div className="menu__wrapper">
                        <nav>
                            <a href="" className="menu__element">Shop</a>
                            <a href="" className="menu__element">About us</a>
                            <a href="" className="menu__element">Our team</a>
                            <a href="" className="menu__element">Buyer's guides</a>
                            <a href="" className="menu__element">Categories</a>
                        </nav>

                        <button className="buy_btn">
                            <div className="buy_btn__text">Buy template</div>
                        </button>

                        <button className="cart_btn">
                            <div className="cart_btn__wrapper">
                                <img src={Icon} className="icon"></img>
                                <div className="cart_text">Cart</div>
                                <div className= "oval">
                                    <div className= "oval__counter">0</div>
                                </div>
                            </div>

                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;
