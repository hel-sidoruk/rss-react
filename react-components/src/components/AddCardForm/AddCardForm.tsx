import React, { Component, createRef } from 'react';
import { ErrorsState, IPost } from '../../types';
import { changeTags, randomId, randomImage } from '../../utils';
import { validate } from '../../utils/validation';
import Form from './Form';

type State = { tags: string[]; image: string | ArrayBuffer; errors: ErrorsState };
type Props = { addPost: (post: IPost) => void };

export class AddCardForm extends Component<Props, State> {
  formRef = createRef<HTMLFormElement>();
  state = { tags: [], image: '', errors: { title: '', author: '', text: '', tags: '' } };
  constructor(props: Props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeTags = this.changeTags.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.clearError = this.clearError.bind(this);
  }

  onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const post: IPost = {
      id: randomId(),
      title: this.formRef.current?.['Title'].value,
      author: this.formRef.current?.['Author'].value,
      text: this.formRef.current?.['Text'].value,
      image: this.state.image || randomImage(),
      tags: this.state.tags,
      date: new Date(Date.now()).toLocaleDateString(),
    };
    const errors = validate(post);
    this.setState({ errors });
    if (Object.values(errors).some(Boolean)) return;
    this.props.addPost(post);
    this.formRef.current?.reset();
    this.setState({ tags: [], image: '' });
  }

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
