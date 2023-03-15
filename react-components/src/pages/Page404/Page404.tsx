import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './page404.module.scss';

export class Page404 extends Component {
  render() {
    return (
      <div className={styles.page404}>
        <div className={`container ${styles.container}`}>
          <h1 className={styles.title}>404 Not found</h1>
          <p className={styles.text}>We couldn&apos;t find this page :(</p>
          <Link className={styles.link} to="/">
            Back home
          </Link>
        </div>
      </div>
    );
  }
}
