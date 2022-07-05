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


import "./style.scss";

function Main() {


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
                                <div className="six__body">
                                    <img src={Ic1}/>
                                    <p></p>
                                    <p></p>
                                </div>
                                <div className="six__body">
                                    <img src={Ic2}/>
                                    <p></p>
                                    <p></p>
                                </div>
                                <div className="six__body">
                                    <img src={Ic3}/>
                                    <p></p>
                                    <p></p>
                                </div>
                                <div className="six__body">
                                    <img src={Ic4}/>
                                    <p></p>
                                    <p></p>
                                </div>
                                <div className="six__body">
                                    <img src={Ic5}/>
                                    <p></p>
                                    <p></p>
                                </div>
                                <div className="six__body">
                                    <img src={Ic6}/>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Main;
