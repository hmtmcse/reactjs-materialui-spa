import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './../components/pages/login-page';
import DashboardPage from './../components/pages/dashboard-page';
import MainLayout from './../layouts/main-layout';


const routes = [
    {
        path: "/dashboard",
        component: DashboardPage
    }
];

const layoutsRoutes = [
    {
        path: "/",
        component: MainLayout,
        isExact:true
    },
    {
        path: "/login",
        component: LoginPage
    }
];

const RouteWithSubRoutes = route => (
    <Route
        exact={route.isExact}
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);

const AppRouter = () => (
    <Router>
        <React.Fragment>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </React.Fragment>
    </Router>
);

const LayoutRouter = () => (
    <Router>
        <React.Fragment>
            {layoutsRoutes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </React.Fragment>
    </Router>
);

export {
    AppRouter,
    LayoutRouter
};