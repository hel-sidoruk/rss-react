import React, { Component } from 'react';
import { CardsList } from '../../components/CardsList';
import { SearchBar } from '../../components/SearchBar';
import styles from './home.module.scss';

export class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <div className={`container ${styles.container}`}>
          <SearchBar />
          <CardsList />
        </div>
      </div>
    );
  }
}
