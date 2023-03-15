import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

export class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/about">
            About Us
          </NavLink>
        </div>
      </header>
    );
  }
}
