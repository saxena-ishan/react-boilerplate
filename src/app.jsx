import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Router from './Router';

// Redux Config
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
const store = configureStore();

// Root Stylesheet
import './sass/main';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
