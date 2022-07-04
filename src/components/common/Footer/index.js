import React from "react";

import "./style.scss";

import Logo from "../../../img/LightLogo.png";
import In from "../../../img/in.svg";
import Facebook from "../../../img/facebook.svg";
import Insta from "../../../img/insta.svg";
import Twitter from "../../../img/twitter.svg";

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className='footerLogoBlock'>
                    <img className="logo" src={Logo} alt="Logo" width="160" height="48"/>
                </div>

                <div className='footerContent'>
                    <div className="links">
                        <div className="title">PAGES</div>
                        <div className="subtitle">Home</div>
                        <div className="subtitle">Shop</div>
                        <div className="subtitle">Categories</div>
                        <div className="subtitle">Buyer's guides</div>
                        <div className="subtitle">404</div>
                        <div className="subtitle">Password</div>
                    </div>

                    <div className="links">
                        <div className="title">Gear categories</div>
                        <div className="subtitle">Hiking Gear</div>
                        <div className="subtitle">Climbing Gear</div>
                        <div className="subtitle">Jackets</div>
                        <div className="subtitle">Accessories</div>
                        <div className="subtitle">Apparel</div>
                        <div className="subtitle">Headwear</div>
                    </div>
                    <div className="links">
                        <div className="title">Company</div>
                        <div className="subtitle">About us</div>
                        <div className="subtitle">Our team</div>
                        <div className="subtitle">Contact</div>
                        <div className="subtitle">Terms & Conditions</div>
                        <div className="subtitle">Style guide</div>
                        <div className="subtitle">Licenses</div>
                    </div>
                    <div className="newsletter">
                        <div className="title">Newsletter</div>
                        <div className="subtitle">Subscribe to our (infrequent) newsletter where we share news about
                            upcoming listings and projects.
                        </div>
                        <form className="email">
                            <input className="email__input" placeholder="Email"/>
                            <button className="email__submit">Submit</button>
                        </form>

                    </div>
                </div>
                <div className="what_block">
                    <div className="powered">
                        <p className="subtitle">© Outdoor Exploration, LLC. All rights reserved. Powered by Webflow.</p>
                    </div>
                    <div className="socials">
                        <img className="socials__icon" src={In}/>
                        <img className="socials__icon" src={Facebook}/>
                        <img className="socials__icon" src={Insta}/>
                        <img className="socials__icon" src={Twitter}/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
