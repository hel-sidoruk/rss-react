import React, { Component } from 'react';
import { ClearErrorFn, ErrorsState } from '../../types';
import styles from './form.module.scss';

type Props = { error: string; id: string; clearError: ClearErrorFn };

export default class Field extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.field}>
        <input
          id={this.props.id}
          onInput={() => this.props.clearError(this.props.id.toLowerCase() as keyof ErrorsState)}
          className={styles.input}
          placeholder={this.props.id}
        />
        <p>{this.props.error}</p>
      </div>
    );
  }
}
