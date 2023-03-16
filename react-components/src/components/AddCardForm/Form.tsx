import React, { Component } from 'react';
import { ErrorsState } from '../../types';
import { Dropdown } from '../Dropdown';
import Field from './Field';
import FileInput from './FileInput';
import styles from './form.module.scss';

type Props = {
  errors: ErrorsState;
  onSubmit: (e: React.FormEvent) => void;
  titleInput: React.RefObject<HTMLInputElement>;
  authorInput: React.RefObject<HTMLInputElement>;
  textInput: React.RefObject<HTMLTextAreaElement>;
  image: string;
  changeImage: (image: string | ArrayBuffer) => void;
  tags: string[];
  changeTags: (tag: string) => void;
};

export default class Form extends Component<Props, { errors: ErrorsState }> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <form className={styles.form} onSubmit={this.props.onSubmit}>
        <Field error={this.props.errors.title}>
          <input ref={this.props.titleInput} className={styles.input} placeholder="Title" />
        </Field>
        <Field error={this.props.errors.author}>
          <input ref={this.props.authorInput} className={styles.input} placeholder="Author" />
        </Field>
        <Field error={this.props.errors.text}>
          <textarea ref={this.props.textInput} className={styles.input} placeholder="Text" />
        </Field>
        <FileInput changeImage={this.props.changeImage} image={this.props.image} />
        <Field error={this.props.errors.tags}>
          <Dropdown tags={this.props.tags} changeTags={this.props.changeTags} />
        </Field>
        <button
          type="submit"
          className={`${styles.btn} ${
            Object.values(this.props.errors).some(Boolean) ? styles.disabled : ''
          }`}
        >
          Create
        </button>
      </form>
    );
  }
}
