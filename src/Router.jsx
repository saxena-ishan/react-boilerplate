import React, { Component } from 'react';

import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";

import { 
    ReactPage
} from './pages';

class Router extends Component {
    render() {
        return (
            <div className="app-root">
                Boilerplate
                <HashRouter>
                    <Switch>
                        <Route 
                            exact path='/' 
                            children={<ReactPage/>} 
                        />
                        <Route 
                            path="*" 
                            children={<ReactPage/>}
                        />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}

export default Router;
