import React from 'react';
import {Switch, Link, Route, useRouteMatch} from 'react-router-dom'
import SignUp from "../../pages/login/SignUp";
import SignIn from "../../pages/login/SignIn";
import RecoverAccount from "../../pages/login/RecoverAccount";

const LoginRoutes = () => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <Link to={`${url}/signup`}>Sign Up</Link>*/}
            {/*    </li>*/}
            {/*</ul>*/}
            {/*<hr />*/}

            <Switch>
                <Route exact path={`${path}/`}>
                    <SignIn />
                </Route>
                <Route path={`${path}/signup`}>
                    <SignUp />
                </Route>
                <Route path={`${path}/recover`}>
                    <RecoverAccount />
                </Route>

            </Switch>
        </div>

    )
};

export default LoginRoutes;