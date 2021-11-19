import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../routes";

export const AppRouter = () => {
    const auth = true
    return (
        auth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route {...route} key={route.path} />
                )}
                <Redirect to={RouteNames.EVENT} />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route {...route} key={route.path} />
                )}
                <Redirect to={RouteNames.LOGIN} />
            </Switch>
    )
}

