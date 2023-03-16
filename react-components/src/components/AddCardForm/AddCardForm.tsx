import React, { Component, createRef } from 'react';
import { PostsContext, PostsContextType } from '../../context/PostsContext';
import { ErrorsState, IPost } from '../../types';
import { changeTags, randomId, randomImage } from '../../utils';
import { validate } from '../../utils/validation';
import Form from './Form';

type State = { tags: string[]; image: string | ArrayBuffer; errors: ErrorsState };

export class AddCardForm extends Component<object, State> {
  titleInput = createRef<HTMLInputElement>();
  authorInput = createRef<HTMLInputElement>();
  textInput = createRef<HTMLTextAreaElement>();
  state = { tags: [], image: '', errors: { title: '', author: '', text: '', tags: '' } };
  constructor(props: object) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeTags = this.changeTags.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const post: IPost = {
      id: randomId(),
      title: this.titleInput.current?.value as string,
      author: this.authorInput.current?.value as string,
      text: this.textInput.current?.value as string,
      image: this.state.image || randomImage(),
      tags: this.state.tags,
      date: new Date(Date.now()).toLocaleDateString(),
    };
    const errors = validate(post);
    this.setState({ errors });
    if (Object.values(errors).some(Boolean)) return;
    (this.context as PostsContextType).addPost(post);
    (e.target as HTMLFormElement).reset();
    this.setState({ tags: [], image: '' });
  }

  changeTags = (tag: string) => this.setState(({ tags }) => ({ tags: changeTags(tags, tag) }));
  changeImage = (image: string | ArrayBuffer) => this.setState({ image });

  render() {
    return (
      <Form
        errors={this.state.errors}
        titleInput={this.titleInput}
        textInput={this.textInput}
        authorInput={this.authorInput}
        onSubmit={this.onSubmit}
        tags={this.state.tags}
        changeTags={this.changeTags}
        image={this.state.image}
        changeImage={this.changeImage}
      />
    );
  }
}

AddCardForm.contextType = PostsContext;
