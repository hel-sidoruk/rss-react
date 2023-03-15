import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Page404 } from '../pages/Page404';

export default class AppRouter extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    );
  }
}
