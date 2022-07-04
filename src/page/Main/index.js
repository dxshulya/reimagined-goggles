import React from "react";

import {MainLayout} from "../../components/layout";


import "./style.scss";

function Main() {


    return (
        <MainLayout>
            <div className="mainPage">
                <div className="mainPage__body">
                    <div className="exploration">
                        <div className="motivation">
                            <p className="motivation__yellow_block">OUTDOOR EXPLORATION</p>
                            <p className="motivation__white_block">Gear for when it actually matters.</p>
                            <p className="motivation__gray_block">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Suspendisse varius enim in eros elementum tristique.</p>

                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Main;
