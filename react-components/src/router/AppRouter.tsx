import React, { Component } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Page404 from '../pages/Page404';
import { Routes, Route } from 'react-router-dom';

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
