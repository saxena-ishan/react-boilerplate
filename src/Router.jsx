import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setProp } from './redux/stores/common/actions';

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

const mapStateToProps = (state) => {
    return {
        prop: state.common.prop,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setProp: bindActionCreators(setProp, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
