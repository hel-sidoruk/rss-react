import React, { Component } from 'react';
import { AddCardForm } from '../../components/AddCardForm';
import styles from './add-card.module.scss';

export class AddCard extends Component {
  render() {
    return (
      <div className={styles.section}>
        <div className={`container ${styles.container}`}>
          <AddCardForm />
        </div>
      </div>
    );
  }
}
