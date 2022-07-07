import React from "react";

import {MainLayout} from "../../components/layout";

import Pic2 from "../../img/pic2.png";

import Arrow from "../../img/arrow.svg";

import Ic1 from "../../img/ic1.svg";
import Ic2 from "../../img/ic2.svg";
import Ic3 from "../../img/ic3.svg";
import Ic4 from "../../img/ic4.svg";
import Ic5 from "../../img/ic5.svg";
import Ic6 from "../../img/ic6.svg";

import Pic3 from "../../img/pic3.png";
import Pic4 from "../../img/pic4.png";
import Pic5 from "../../img/pic5.png";
import Pic6 from "../../img/pic6.png";
import Pic7 from "../../img/pic7.png";
import Pic8 from "../../img/pic8.png";

import Shoper from "../../img/shoper.svg";
import Camera from "../../img/camera.svg";
import Person from "../../img/person.svg";
import Location from "../../img/location.svg";

import Pic10 from "../../img/pic10.png";
import Pic11 from "../../img/pic11.png";
import Photo1 from "../../img/photo1.png";
import Photo2 from "../../img/photo2.png";


import "./style.scss";

function Main() {

    const cards = [
        {
            img: Pic3,
            title: "Accessories",
            subtitle: "Accessories you didn't know you needed.",
            link: "View Accessories",
            icon: Arrow,
        },
        {
            img: Pic4,
            title: "Apparel",
            subtitle: "Check out our line of non-hiking clothes.",
            link: "View Apparel",
            icon: Arrow,
        },
        {
            img: Pic5,
            title: "Climbing Gear",
            subtitle: "Climbing gear for every occasion.",
            link: "View Climbing Gear",
            icon: Arrow,
        },
        {
            img: Pic6,
            title: "Headwear",
            subtitle: "Our beanies are so comfy you won't believe it.",
            link: "View Headwear",
            icon: Arrow,
        },
        {
            img: Pic7,
            title: "Hiking Gear",
            subtitle: "Desert or mountain? Doesn't matter.",
            link: "View Hiking Gear",
            icon: Arrow,
        },
        {
            img: Pic8,
            title: "Jackets",
            subtitle: "Our jackets are perfect for every season.",
            link: "View Jackets",
            icon: Arrow,
        },
    ]


    return (
        <MainLayout>
            <div className="mainPage">
                <div className="mainPage__body">
                    <div className="columnBlock">

                        <div className="exploration">
                            <div className="motivation">
                                <p className="motivation__yellow_block">OUTDOOR EXPLORATION</p>
                                <p className="motivation__white_block">Gear for when it actually matters.</p>
                                <p className="motivation__gray_block">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse varius enim in eros elementum tristique.</p>
                            </div>
                        </div>

                        <div className="whoweare">
                            <img className="whoweare__image" src={Pic2}/>
                            <div className="whoweare__text">
                                <p className="whoweare__text__yellow_block">Who are we?</p>
                                <p className="whoweare__text__white_block">A bit about us.</p>
                                <p className="whoweare__text__gray_block">We are an outdoor gear company focused on
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam
                                    odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex,
                                    condimentum dapibus congue et.</p>
                                <div className="whoweare__text__more">
                                    <p className="whoweare__text__more__text">Read more</p>
                                    <img className="whoweare__text__more__arrow" src={Arrow}/>
                                </div>
                            </div>
                        </div>

                        <div className="promise">
                            <div className="promise__body">
                                <div className="promise__body__text">
                                    <p className="promise__body__text__yellow_block">Our promise</p>
                                    <p className="promise__body__text__white_block">Setting the bar for our
                                        products.</p>
                                    <p className="promise__body__text__gray_block">Morbi neque ex, condimentum dapibus
                                        congue et,
                                        vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et
                                        nisi
                                        ultrices, ut faucibus orci tincidunt.</p>
                                </div>
                            </div>

                            <div className="promise__six">
                                <div className="promise__six__body">
                                    <img className="promise__six__body__icon" src={Ic1}/>
                                    <p className="promise__six__body__title">Sustainable sourcing</p>
                                    <p className="promise__six__body__subtitle">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse varius enim
                                        in eros elementum tristique.</p>
                                </div>
                                <div className="promise__six__body">
                                    <img className="promise__six__body__icon" src={Ic2}/>
                                    <p className="promise__six__body__title">Lifetime warranty</p>
                                    <p className="promise__six__body__subtitle">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse varius enim
                                        in eros elementum tristique.</p>
                                </div>
                                <div className="promise__six__body">
                                    <img className="promise__six__body__icon" src={Ic3}/>
                                    <p className="promise__six__body__title">All-terrain tested</p>
                                    <p className="promise__six__body__subtitle">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse varius enim
                                        in eros elementum tristique.</p>
                                </div>
                                <div className="promise__six__body">
                                    <img className="promise__six__body__icon" src={Ic4}/>
                                    <p className="promise__six__body__title">Premium materials</p>
                                    <p className="promise__six__body__subtitle">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse varius enim
                                        in eros elementum tristique.</p>
                                </div>
                                <div className="promise__six__body">
                                    <img className="promise__six__body__icon" src={Ic5}/>
                                    <p className="promise__six__body__title">Designed by you</p>
                                    <p className="promise__six__body__subtitle">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse varius enim
                                        in eros elementum tristique.</p>
                                </div>
                                <div className="promise__six__body">
                                    <img className="promise__six__body__icon" src={Ic6}/>
                                    <p className="promise__six__body__title">Quality assured</p>
                                    <p className="promise__six__body__subtitle">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse varius enim
                                        in eros elementum tristique.</p>
                                </div>
                            </div>
                        </div>

                        <div className="family">
                            <div className="family__text">
                                <p className="family__text__yellow_block">Meet the family</p>
                                <p className="family__text__white_block">What we have in store for you.</p>
                                <p className="family__text__gray_block">Morbi neque ex, condimentum dapibus
                                    congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod
                                    elit et nisi ultrices, ut faucibus orci tincidunt.</p>
                            </div>
                            <div className="family__store">
                                {cards.map((item) =>
                                    <div className="family__store__card">
                                        <div className="family__store__card__text">
                                            <p className="family__store__card__text__title">{item.title}</p>
                                            <p className="family__store__card__text__subtitle">{item.subtitle}</p>
                                        </div>
                                        <div className="family__store__card__link">
                                            <a className="family__store__card__link__text">{item.link}</a>
                                            <img className="family__store__card__link__icon" src={item.icon}/>
                                        </div>

                                    </div>
                                )}
                            </div>
                            <div className="family__linkMore">
                                <a className="family__linkMore__text">Show all categories</a>
                                <img className="family__linkMore__icon" src={Arrow}/>
                            </div>

                        </div>

                        <div className="shop">
                            <div className="shop__picture">
                                <div className="shop__picture__about">
                                    <div className="shop__picture__about__item">
                                        <img className="shop__picture__about__item__icon" src={Shoper}/>
                                        <p className="shop__picture__about__item__text">First Aid Kit Banger Bottle</p>
                                    </div>

                                    <div className="shop__picture__about__item">
                                        <img className="shop__picture__about__item__icon" src={Camera}/>
                                        <p className="shop__picture__about__item__text">Brian Schultz</p>
                                    </div>

                                    <div className="shop__picture__about__item">
                                        <img className="shop__picture__about__item__icon" src={Person}/>
                                        <p className="shop__picture__about__item__text">Leah Stoff</p>
                                    </div>

                                    <div className="shop__picture__about__item">
                                        <img className="shop__picture__about__item__icon" src={Location}/>
                                        <p className="shop__picture__about__item__text">Catalina, California</p>
                                    </div>
                                </div>
                            </div>
                            <div className="shop__body">
                                <div className="shop__body__text">
                                    <p className="shop__body__text__title">Shop</p>
                                    <p className="shop__body__text__subtitle">Check out our products.</p>
                                    <p className="shop__body__text__text">Morbi neque ex, condimentum dapibus congue et,
                                        vulputate ut ligula. Vestibulum
                                        sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci
                                        tincidunt.</p>
                                </div>
                                <button className="shop__body__button">Visit shop</button>
                            </div>
                        </div>

                        <div className="guide">
                            <div className="guide__body">
                                <div className="guide__body__text">
                                    <p className="guide__body__text__title">Buyer's guides</p>
                                    <p className="guide__body__text__subtitle">Navigating our offering.</p>
                                    <p className="guide__body__text__text">Morbi neque ex, condimentum dapibus congue
                                        et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et
                                        nisi ultrices, ut faucibus orci tincidunt.</p>
                                </div>
                                <div className="guide__body__blog">
                                    <div className="guide__body__blog__item">
                                        <img src={Pic10} className="guide__body__blog__item__image"/>
                                        <div className="guide__body__blog__item__text">
                                            <p className="guide__body__blog__item__text__title">3 climbing accessories
                                                for the climber that has everything</p>
                                            <div className="guide__body__blog__item__text__person">
                                                <div className="guide__body__blog__item__text__person__profile">
                                                    <img src={Photo1}
                                                         className="guide__body__blog__item__text__person__profile__photo"/>
                                                    <div
                                                        className="guide__body__blog__item__text__person__profile__columnBlock">
                                                        <p className="guide__body__blog__item__text__person__profile__columnBlock__name">Alex
                                                            Jenna</p>
                                                        <p className="guide__body__blog__item__text__person__profile__columnBlock__profession">QA</p>
                                                    </div>

                                                </div>
                                                <p className="guide__body__blog__item__text__person__date">October 18,
                                                    2021</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="guide__body__blog__item">
                                        <img src={Pic11} className="guide__body__blog__item__image"/>
                                        <div className="guide__body__blog__item__text">
                                            <p className="guide__body__blog__item__text__title">Biking accessories for
                                                the beaten path</p>
                                            <div className="guide__body__blog__item__text__person">
                                                <div className="guide__body__blog__item__text__person__profile">
                                                    <img src={Photo2}
                                                         className="guide__body__blog__item__text__person__profile__photo"/>
                                                    <div
                                                        className="guide__body__blog__item__text__person__profile__columnBlock">
                                                        <p className="guide__body__blog__item__text__person__profile__columnBlock__name">Woodie
                                                            Brandon</p>
                                                        <p className="guide__body__blog__item__text__person__profile__columnBlock__profession">Product
                                                            Designer</p>
                                                    </div>
                                                </div>
                                                <p className="guide__body__blog__item__text__person__date">October 18,
                                                    2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="guide__body__link">
                                    <a className="guide__body__link__text">Show all buyer's guides</a>
                                    <img className="guide__body__link__icon" src={Arrow}/>
                                </div>
                            </div>
                        </div>

                        <div className="reading">
                            <div className="reading__body">
                                <div className="reading__body"></div>
                                <div className="reading__body"></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Main;
