import React, { Component, createRef } from 'react';
import { ErrorsState, IPost } from '../../types';
import { changeTags, randomId } from '../../utils';
import { validate } from '../../utils/validation';
import Form from './Form';

type State = { tags: string[]; image: string | ArrayBuffer; errors: ErrorsState };
type Props = { addPost: (post: IPost) => void };

export class AddCardForm extends Component<Props, State> {
  formRef = createRef<HTMLFormElement>();
  state: State = {
    tags: [],
    image: '',
    errors: { title: '', tags: '', date: '', image: '', check: '', gender: '' },
  };
  constructor(props: Props) {
    super(props);
  }

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post: IPost = {
      id: randomId(),
      title: this.formRef.current?.['Title'].value,
      date: this.formRef.current?.['Date'].value,
      image: this.state.image as string,
      tags: this.state.tags,
      gender: this.formRef.current?.['female'].checked
        ? 'Female'
        : this.formRef.current?.['male'].checked
        ? 'Male'
        : '',
    };
    const errors = validate(post, this.formRef.current?.['Check'].checked);
    this.setState({ errors });
    if (Object.values(errors).some(Boolean)) return;
    this.props.addPost(post);
    this.formRef.current?.reset();
    this.setState({ tags: [], image: '' });
  };

  changeTags = (tag: string) => {
    if (this.state.errors.tags && !this.state.tags.length) this.clearError('tags');
    this.setState(({ tags }) => ({ tags: changeTags(tags, tag) }));
  };
  changeImage = (image: string | ArrayBuffer) => {
    if (this.state.errors.image) this.clearError('image');
    this.setState({ image });
  };

  clearError = (error: keyof ErrorsState) =>
    this.setState((state) => {
      state.errors[error] = '';
      return state;
    });

  render() {
    return (
      <Form
        formRef={this.formRef}
        errors={this.state.errors}
        onSubmit={this.onSubmit}
        tags={this.state.tags}
        changeTags={this.changeTags}
        image={this.state.image}
        changeImage={this.changeImage}
        clearError={this.clearError}
      />
    );
  }
}
