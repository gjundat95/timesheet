import React, { Component } from 'react';
import { Navigation } from './routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers';

let store = createStore(reducers);

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}