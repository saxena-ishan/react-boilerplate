import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { ReactPage } from './pages';

import './sass/main';

class App extends Component {
  render() {
    return (
        <div className="app-root">
          Boilerplate
          <ReactPage/>
        </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
