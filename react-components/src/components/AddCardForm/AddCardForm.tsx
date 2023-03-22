import React, { Component, createRef } from 'react';
import { ErrorsState, IPost } from '../../types';
import { changeTags, randomId, randomImage } from '../../utils';
import { validate } from '../../utils/validation';
import Form from './Form';

type State = { tags: string[]; image: string | ArrayBuffer; errors: ErrorsState };
type Props = { addPost: (post: IPost) => void };

export class AddCardForm extends Component<Props, State> {
  formRef = createRef<HTMLFormElement>();
  state = { tags: [], image: '', errors: { title: '', text: '', tags: '' } };
  constructor(props: Props) {
    super(props);
  }

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(this.formRef.current?.['Check'].checked);
    const post: IPost = {
      id: randomId(),
      title: this.formRef.current?.['Title'].value,
      date: this.formRef.current?.['Date'].value,
      image: this.state.image || randomImage(),
      tags: this.state.tags,
    };
    const errors = validate(post);
    this.setState({ errors });
    if (Object.values(errors).some(Boolean)) return;
    this.props.addPost(post);
    this.formRef.current?.reset();
    this.setState({ tags: [], image: '' });
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
