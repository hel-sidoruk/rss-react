import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

export class Header extends Component {
  toggleClass = ({ isActive }: { isActive: boolean }) => (isActive ? styles.active : '');

  render() {
    return (
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          <NavLink className={this.toggleClass} to="/">
            Forms
          </NavLink>
          <NavLink className={this.toggleClass} to="/home">
            Home
          </NavLink>
          <NavLink className={this.toggleClass} to="/about">
            About Us
          </NavLink>
        </div>
      </header>
    );
  }
}
