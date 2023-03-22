import React, { Component } from 'react';
import { ClearErrorFn } from '../../../types';
import styles from './radio-input.module.scss';

type Props = {
  error: string;
  clearError: ClearErrorFn;
};

export class RadioInput extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  clearError = () => this.props.clearError('gender');
  render() {
    return (
      <div className={styles.field}>
        <input onChange={this.clearError} id="female" type="radio" name="question" />
        <label htmlFor="female">Female</label>
        <input onChange={this.clearError} id="male" type="radio" name="question" />
        <label htmlFor="male">Male</label>
        <p>{this.props.error}</p>
      </div>
    );
  }
}
