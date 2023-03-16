import React, { Component } from 'react';
import { Dropdown } from '../Dropdown';
import FileInput from './FileInput';
import styles from './form.module.scss';

type Props = {
  onSubmit: (e: React.FormEvent) => void;
  titleInput: React.RefObject<HTMLInputElement>;
  authorInput: React.RefObject<HTMLInputElement>;
  textInput: React.RefObject<HTMLTextAreaElement>;
  image: string;
  changeImage: (image: string | ArrayBuffer) => void;
  tags: string[];
  changeTags: (tag: string) => void;
};

export default class Form extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <form className={styles.form} onSubmit={this.props.onSubmit}>
        <input ref={this.props.titleInput} className={styles.input} placeholder="Title" />
        <input ref={this.props.authorInput} className={styles.input} placeholder="Your name" />
        <textarea
          ref={this.props.textInput}
          className={`${styles.textarea} ${styles.input}`}
          spellCheck="false"
          placeholder="Text"
        />
        <FileInput changeImage={this.props.changeImage} image={this.props.image} />
        <div className={styles.footer}>
          <Dropdown tags={this.props.tags} changeTags={this.props.changeTags} />
          <button type="submit" className={styles.btn}>
            Create
          </button>
        </div>
      </form>
    );
  }
}
