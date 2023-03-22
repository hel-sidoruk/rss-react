import React, { Component } from 'react';
import { ClearErrorFn, ErrorsState } from '../../types';
import styles from './form.module.scss';

type Props = { error: string; id: string; clearError: ClearErrorFn };

export default class Field extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  clearError = () => this.props.clearError(this.props.id.toLowerCase() as keyof ErrorsState);
  render() {
    return (
      <div className={styles.field}>
        <input
          className={styles.input}
          id={this.props.id}
          onInput={this.clearError}
          placeholder={this.props.id}
        />
        <p>{this.props.error}</p>
      </div>
    );
  }
}
