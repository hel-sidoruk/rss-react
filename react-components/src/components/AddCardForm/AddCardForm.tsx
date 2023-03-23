import React, { Component, createRef } from 'react';
import { ErrorsState, IPost } from '../../types';
import { initialErrors, randomId } from '../../utils';
import { validate } from '../../utils/validation';
import Form from './Form';

type State = { image: string | ArrayBuffer; errors: ErrorsState; success: boolean };
type Props = { addPost: (post: IPost) => void };

export class AddCardForm extends Component<Props, State> {
  formRef = createRef<HTMLFormElement>();
  state: State = { image: '', success: false, errors: initialErrors };

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post: IPost = {
      id: randomId(),
      text: this.formRef.current?.['text'].value,
      date: this.formRef.current?.['date'].value,
      image: this.state.image as string,
      tag: this.formRef.current?.['dropdown'].value,
      gender: this.formRef.current?.['female'].checked
        ? 'Female'
        : this.formRef.current?.['male'].checked
        ? 'Male'
        : '',
    };
    const errors = validate(post, this.formRef.current?.['check'].checked);
    this.setState({ errors });
    if (Object.values(errors).some(Boolean)) return;
    this.props.addPost(post);
    this.formRef.current?.reset();
    this.setState({ image: '', success: true });
    setTimeout(() => this.setState({ success: false }), 2000);
  };

  changeImage = (image: string | ArrayBuffer) => this.setState({ image });

  clearError = (error: keyof ErrorsState) =>
    this.setState((state) => {
      state.errors[error] = '';
      return state;
    });

  render() {
    return (
      <Form
        success={this.state.success}
        formRef={this.formRef}
        errors={this.state.errors}
        onSubmit={this.onSubmit}
        image={this.state.image}
        changeImage={this.changeImage}
      />
    );
  }
}
