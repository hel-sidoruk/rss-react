import React, { Component } from 'react';
import { Dropdown } from './Dropdown';
import styles from './form.module.scss';

type Props = {
  error: string;
  tags: string[];
  change: (t: string) => void;
};

export default class DropdownField extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.field}>
        <Dropdown
          tags={this.props.tags}
          changeTags={this.props.change}
          error={!!this.props.error}
        />
        <p>{this.props.error}</p>
      </div>
    );
  }
}
