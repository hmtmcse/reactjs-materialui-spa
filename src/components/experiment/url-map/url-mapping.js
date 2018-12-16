import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFoundView from "./not-found-view"


const singleLayout = [
    {
        path: "/login",
        component: Sandwiches
    }
];

const nestedPanelLayout = [
    {
        path: "/login",
        component: Sandwiches
    }
];


export default class UrlMapping extends Component {


    render(){
        return (
            <Router>
                <React.Fragment>
                    <Switch>
                        {singleLayout.map((route, key) => {
                            const { component, path } = route;
                            return (
                                <Route
                                    exact
                                    path={path}
                                    key={key}
                                    render={ (route) =>
                                        <PublicLayout
                                            component={component}
                                            route={route}
                                        />
                                    }
                                />
                            )
                        })}
                        {nestedPanelLayout.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                        <Route component={NotFoundView}/>
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}
