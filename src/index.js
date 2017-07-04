import React, { Component } from 'react';
import { Navigation } from './routes';
import { Provider } from 'react-redux';
import store from './store';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}