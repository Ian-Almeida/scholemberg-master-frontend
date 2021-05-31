import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import LoginRoutes from "./routes/LoginRoutes";
import Home from "../pages/login/Home";


const MainRouter = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/login">
                <LoginRoutes />
            </Route>
        </Switch>
    )
}

export default MainRouter;