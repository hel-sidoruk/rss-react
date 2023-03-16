import React, { Component, createRef } from 'react';
import styles from './input.module.scss';

type Props = { image: string; changeImage: (s: string | ArrayBuffer) => void };

export class FileInput extends Component<Props> {
  fileInput: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.fileInput = createRef();
    this.selectFile = this.selectFile.bind(this);
  }
  readImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && e.target.result) this.props.changeImage(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) this.readImage(e.target.files[0]);
  };

  render() {
    return (
      <div className={styles.fileUpload}>
        <input onChange={this.selectFile} accept="image/*" ref={this.fileInput} type="file" />
        <div className={styles.fileField} onClick={() => this.fileInput.current?.click()}>
          <div className={styles.btn}>Upload file</div>
          {this.props.image && <img src={this.props.image as string} />}
        </div>
      </div>
    );
  }
}
