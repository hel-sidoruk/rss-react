import React, { Component } from 'react';
import { Dropdown } from '../Dropdown';
import FileInput from './FileInput';
import styles from './form.module.scss';

export class AddCardForm extends Component {
  render() {
    return (
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Title" />
        <input className={styles.input} type="text" placeholder="Your name" />
        <textarea
          className={`${styles.textarea} ${styles.input}`}
          spellCheck="false"
          id="description"
          placeholder="Description"
        />
        <FileInput />
        <Dropdown />
      </form>
    );
  }
}
