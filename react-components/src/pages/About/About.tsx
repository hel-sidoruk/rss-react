import React, { Component } from 'react';
import styles from './about.module.scss';

export class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <div className="container">
          <h1>About Us Page</h1>
        </div>
      </div>
    );
  }
}
