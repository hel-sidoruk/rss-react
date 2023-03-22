import React, { Component } from 'react';
import { ErrorsState, FormProps } from '../../types';
import DropdownField from './DropdownField';
import Field from './Field';
import { FileInput } from './FileInput';
import styles from './form.module.scss';
import { RadioInput } from './RadioInput';

export default class Form extends Component<FormProps, { errors: ErrorsState }> {
  constructor(props: FormProps) {
    super(props);
  }

  disabledClass = () => (Object.values(this.props.errors).some(Boolean) ? styles.disabled : '');

  render() {
    return (
      <form ref={this.props.formRef} className={styles.form} onSubmit={this.props.onSubmit}>
        <Field error={this.props.errors.text} id="text" clearError={this.props.clearError} />
        <Field error={this.props.errors.date} id="date" clearError={this.props.clearError} />
        <div className={styles.field}>
          <FileInput changeImage={this.props.changeImage} image={this.props.image} />
          <p>{this.props.errors.image}</p>
        </div>
        <DropdownField
          error={this.props.errors.tags}
          change={this.props.changeTags}
          tags={this.props.tags}
        />
        <RadioInput error={this.props.errors.gender} clearError={this.props.clearError} />
        <div className={styles.field}>
          <input onChange={() => this.props.clearError('check')} type="checkbox" id="check" />
          <label htmlFor="check">I agree to publish this data</label>
          <p>{this.props.errors.check}</p>
        </div>
        <button type="submit" className={`${styles.btn} ${this.disabledClass()}`}>
          Create
        </button>
        {this.props.success && (
          <div className={styles.success}>The data has been saved successfully</div>
        )}
      </form>
    );
  }
}
