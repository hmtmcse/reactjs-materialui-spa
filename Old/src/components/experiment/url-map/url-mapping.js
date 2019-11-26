import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFoundView from "./not-found-view"
import LoginView from "./views/login-view";
import DashboardView from "./views/dashboard-view";
import UserMainView from "./views/user-main-view";
import UserCreateUpdateView from "./views/user-create-update-view";
import PublicLayout from "./layouts/public-layout";
import PrivateLayout from "./layouts/private-layout";


const publicLayoutViews = [
    {
        path: "/login",
        component: LoginView
    }
];

const privateLayoutViews = [
    {
        path: "/",
        component: DashboardView
    },
    {
        path: "/user",
        component: UserMainView
    },
    {
        path: "/user/create",
        component: UserCreateUpdateView
    },
    {
        path: "/user/update/:id",
        component: UserCreateUpdateView
    }
];


export default class UrlMapping extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {privateLayoutViews.map((route, key) => {
                        const { component, path } = route;
                        return (
                            <Route
                                exact
                                path={path}
                                key={key}
                                render={ (route) => <PublicLayout component={component} route={route}/>}
                            />
                        )
                    })}
                    {publicLayoutViews.map((route, key) => {
                        const { component, path } = route;
                        return (
                            <Route
                                exact
                                path={path}
                                key={key}
                                render={ (route) => <PrivateLayout component={component} route={route}/>}
                            />
                        )
                    })}
                    <Route component={NotFoundView}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
