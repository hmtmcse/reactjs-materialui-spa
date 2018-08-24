import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './../components/pages/login-page';
import DashboardPage from './../components/pages/dashboard-page';
import ComponentDemoPage from './../components/pages/component-demo-page';
import TablePage from './../components/pages/table-page';
import FormPage from './../components/pages/form-page';
import MainLayout from './../layouts/main-layout';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import TableChart from '@material-ui/icons/TableChart';
import Edit from '@material-ui/icons/Edit';


const PageRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon:DashboardIcon,
        component: DashboardPage
    },
    {
        path: "/table",
        name: "Table",
        icon:TableChart,
        component: TablePage
    },
    {
        path: "/form",
        name: "Form",
        icon:Edit,
        component: FormPage
    },
    {
        path: "/component-demo",
        name: "Component Demo",
        icon:Edit,
        component: ComponentDemoPage
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