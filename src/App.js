import React, { Component } from 'react';
import { Navigation } from './routes/Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers';
import Main from './Main';
let store = createStore(reducers);

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

