import React, { Component } from 'react';
import { ClearErrorFn, ErrorsState } from '../../types';
import DropdownField from './DropdownField';
import Field from './Field';
import FileInput from './FileInput';
import styles from './form.module.scss';

type Props = {
  errors: ErrorsState;
  image: string;
  tags: string[];
  clearError: ClearErrorFn;
  formRef: React.RefObject<HTMLFormElement>;
  onSubmit: (e: React.FormEvent) => void;
  changeImage: (image: string | ArrayBuffer) => void;
  changeTags: (tag: string) => void;
};

export default class Form extends Component<Props, { errors: ErrorsState }> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <form ref={this.props.formRef} className={styles.form} onSubmit={this.props.onSubmit}>
        <Field error={this.props.errors['title']} id="Title" clearError={this.props.clearError} />
        <Field error={this.props.errors['author']} id="Author" clearError={this.props.clearError} />
        <Field error={this.props.errors['text']} id="Text" clearError={this.props.clearError} />
        <FileInput changeImage={this.props.changeImage} image={this.props.image} />
        <DropdownField
          error={this.props.errors.tags}
          change={this.props.changeTags}
          tags={this.props.tags}
          clearError={this.props.clearError}
        />
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
