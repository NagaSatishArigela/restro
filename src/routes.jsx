import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contacts from "./Pages/contacts";
import Dashboard from "./pages/Dashboard";
// import NotFound from "./pages/NotFound";
import Reports from "./Pages/reports";
import Settings from "./Pages/settings";

function PageRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/page-1" component={Contacts}/>
                <Route path="/page-2" component={Settings}/>
                <Route path="/page-3" component={Reports}/>
                {/* <Route component={NotFound}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes;