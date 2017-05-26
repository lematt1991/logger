import React, { Component } from 'react';
import Log from './pages/Log'
import {Provider} from 'react-redux'
import store from './store'
import './Init'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Log/>
      </Provider>
    );
  }
}

export default App;
