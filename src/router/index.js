import React from "react";
import {Routes, Route} from 'react-router-dom';

import {BLOG_LINK, MAIN_LINK} from "./links";
import {Main, Blog} from "../page";

function MainRoute() {
    return (
        <Routes>
            <Route exact path={MAIN_LINK} component={Main}/>
            <Route exact path={BLOG_LINK} component={Blog}/>
        </Routes>
    );
}

export default MainRoute;
