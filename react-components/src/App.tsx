import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRouter from './router/AppRouter';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    );
  }
}
