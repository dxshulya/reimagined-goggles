import React from "react";
import {Routes, Route} from 'react-router-dom';

import {MAIN_LINK} from "./links";
import {Main} from "../page";

function MainRoute() {
    return (
        <Routes>
            <Route exact path={MAIN_LINK} component={Main}/>
        </Routes>
    );
}

export default MainRoute;
