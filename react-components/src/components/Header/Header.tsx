import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/about">
            About Us
          </NavLink>
        </div>
      </header>
    );
  }
}
