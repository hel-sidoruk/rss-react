import React, { Component } from 'react';
import styles from './form.module.scss';

type Props = { error: string; children: React.ReactNode };

export default class Field extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.field}>
        {this.props.children}
        <p>{this.props.error}</p>
      </div>
    );
  }
}
