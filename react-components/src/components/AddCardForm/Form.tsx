import React, { Component } from 'react';
import { ClearErrorFn, ErrorsState } from '../../types';
import DropdownField from './DropdownField';
import Field from './Field';
import { FileInput } from './FileInput';
import styles from './form.module.scss';

type Props = {
  errors: ErrorsState;
  image: string | ArrayBuffer;
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
        <div className={styles.field}>
          <input
            onInput={() => this.props.clearError('date')}
            className={styles.input}
            type="date"
            id="Date"
          />
          <p>{this.props.errors.date}</p>
        </div>
        <div className={styles.field}>
          <FileInput changeImage={this.props.changeImage} image={this.props.image} />
          <p>{this.props.errors.image}</p>
        </div>
        <DropdownField
          error={this.props.errors.tags}
          change={this.props.changeTags}
          tags={this.props.tags}
          clearError={this.props.clearError}
        />
        <div className={styles.field}>
          <input
            onChange={() => this.props.clearError('gender')}
            id="female"
            type="radio"
            name="question"
          />
          <label htmlFor="female">Female</label>
          <input
            onChange={() => this.props.clearError('gender')}
            id="male"
            type="radio"
            name="question"
          />
          <label htmlFor="male">Male</label>
          <p>{this.props.errors.gender}</p>
        </div>
        <div className={styles.field}>
          <input onChange={() => this.props.clearError('check')} type="checkbox" id="Check" />
          <label htmlFor="Check">I agree to publish this data</label>
          <p>{this.props.errors.check}</p>
        </div>
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
