import {BrowserRouter, Link} from "react-router-dom";
import React from "react";
import MainRouter from "./router/MainRouter";
import Header from "./components/header/Header";

const App = () => {


    return (
        <BrowserRouter>
            <Header />
            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            <Link to="/login">Login</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/">Home</Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
            {/*<hr/>*/}
            <MainRouter/>
        </BrowserRouter>

    );
}

export default App;
