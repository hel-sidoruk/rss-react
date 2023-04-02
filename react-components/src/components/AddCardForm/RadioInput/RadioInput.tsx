import React, { Component } from 'react';
import styles from './radio-input.module.scss';

type Props = { error: string };

export class RadioInput extends Component<Props> {
  render() {
    return (
      <div className={styles.field}>
        <input id="female" type="radio" name="question" />
        <label htmlFor="female">Female</label>
        <input id="male" type="radio" name="question" />
        <label htmlFor="male">Male</label>
        <p>{this.props.error}</p>
      </div>
    );
  }
}
