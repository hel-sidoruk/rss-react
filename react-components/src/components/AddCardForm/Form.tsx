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

  render() {
    return (
      <form ref={this.props.formRef} className={styles.form} onSubmit={this.props.onSubmit}>
        <Field error={this.props.errors.text} id="text" />
        <Field error={this.props.errors.date} id="date" />
        <div className={styles.field}>
          <FileInput changeImage={this.props.changeImage} image={this.props.image} />
          <p>{this.props.errors.image}</p>
        </div>
        <DropdownField
          error={this.props.errors.tags}
          change={this.props.changeTags}
          tags={this.props.tags}
        />
        <RadioInput error={this.props.errors.gender} />
        <div className={styles.field}>
          <input type="checkbox" id="check" />
          <label htmlFor="check">I agree to publish this data</label>
          <p>{this.props.errors.check}</p>
        </div>
        <button type="submit" className={styles.btn}>
          Create
        </button>
        {this.props.success && (
          <div className={styles.success}>The data has been saved successfully</div>
        )}
      </form>
    );
  }
}
