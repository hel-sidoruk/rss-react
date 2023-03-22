import React, { Component } from 'react';
import styles from './form.module.scss';

type Props = { error: string; id: string; type?: 'date' };

export default class Field extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.field}>
        <input
          className={styles.input}
          id={this.props.id}
          placeholder={this.props.id}
          type={this.props.id === 'date' ? 'date' : 'text'}
        />
        <p>{this.props.error}</p>
      </div>
    );
  }
}
