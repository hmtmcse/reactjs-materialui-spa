import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './../components/pages/login-page';
import DashboardPage from './../components/pages/dashboard-page';
import MainLayout from './../layouts/main-layout';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentInd from '@material-ui/icons/AssignmentInd';


const PageRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon:DashboardIcon,
        component: DashboardPage
    },
    {
        icon: AssignmentInd,
        path: "/login",
        name: "Login",
    }
];

const LayoutsRoutes = [
    {
        path: "/login",
        component: LoginPage,
    },
    {
        path: "/",
        component: MainLayout,
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
            {PageRoutes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </React.Fragment>
    </Router>
);

const LayoutRouter = () => (
    <Router>
        <React.Fragment>
            {LayoutsRoutes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </React.Fragment>
    </Router>
);

export {
    PageRoutes,
    AppRouter,
    LayoutsRoutes,
    LayoutRouter
};