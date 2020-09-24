import React, { Component } from 'react';
import { ReactComponent } from '../components';

export default class ReactPage extends Component {
    render() {
        return (
            <div className="react-page-root">
                Page
                <ReactComponent/>
            </div>
        )
    }
}
