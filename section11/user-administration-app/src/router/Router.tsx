import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Page404 } from "../components/Page404";

import { Login } from "../components/pages/Login";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { HomeRoutes } from "./HomeRoutes";
export const Router: VFC = memo(() => {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route
                path="/home"
                render={({ match: { url } }) => (
                    <Switch>
                        {HomeRoutes.map((route) => (
                            <Route
                                key={route.path}
                                exact={route.exact}
                                path={`${url}${route.path}`}
                            >
                                <HeaderLayout>{route.children}</HeaderLayout>
                            </Route>
                        ))}
                    </Switch>
                )}
            />
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    );
});