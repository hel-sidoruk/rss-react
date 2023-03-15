import React, { Component } from 'react';
import styles from './form.module.scss';

type Props = object;

export default class FileInput extends Component<Props> {
  input: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.input = React.createRef();
  }
  render() {
    return (
      <div className={styles.fileUpload}>
        <input ref={this.input} type="file" />
        <div className={styles.fileField} onClick={() => this.input.current?.click()}>
          <div className={styles.btn}>Upload file</div>
        </div>
      </div>
    );
  }
}
