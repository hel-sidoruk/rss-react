import React, { Component, createRef } from 'react';
import { ErrorsState, IPost } from '../../types';
import { changeTags, randomId } from '../../utils';
import { validate } from '../../utils/validation';
import Form from './Form';

type State = { tags: string[]; image: string | ArrayBuffer; errors: ErrorsState; success: boolean };
type Props = { addPost: (post: IPost) => void };

export class AddCardForm extends Component<Props, State> {
  formRef = createRef<HTMLFormElement>();
  state: State = {
    tags: [],
    image: '',
    success: false,
    errors: { text: '', tags: '', date: '', image: '', check: '', gender: '' },
  };

  constructor(props: Props) {
    super(props);
  }

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post: IPost = {
      id: randomId(),
      text: this.formRef.current?.['text'].value,
      date: this.formRef.current?.['date'].value,
      image: this.state.image as string,
      tags: this.state.tags,
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
    this.setState({ tags: [], image: '', success: true });
    setTimeout(() => {
      this.setState({ success: false });
    }, 3000);
  };

  changeTags = (tag: string) => this.setState(({ tags }) => ({ tags: changeTags(tags, tag) }));
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
        tags={this.state.tags}
        changeTags={this.changeTags}
        image={this.state.image}
        changeImage={this.changeImage}
      />
    );
  }
}
