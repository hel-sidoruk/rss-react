import React, { Component, createRef } from 'react';
import { PostsContext, PostsContextType } from '../../context/PostsContext';
import { IPost } from '../../types';
import { changeTags, randomId } from '../../utils';
import Form from './Form';

type State = { tags: string[]; image: string | ArrayBuffer };

export class AddCardForm extends Component<object, State> {
  titleInput: React.RefObject<HTMLInputElement>;
  authorInput: React.RefObject<HTMLInputElement>;
  textInput: React.RefObject<HTMLTextAreaElement>;
  state = { tags: [], image: '' };
  constructor(props: object) {
    super(props);
    this.titleInput = createRef();
    this.authorInput = createRef();
    this.textInput = createRef();
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
      image: this.state.image,
      tags: this.state.tags,
      date: new Date(Date.now()).toLocaleDateString(),
    };
    (this.context as PostsContextType).addPost(post);
  }

  changeTags = (tag: string) => this.setState(({ tags }) => ({ tags: changeTags(tags, tag) }));

  changeImage = (image: string | ArrayBuffer) => this.setState({ image });

  render() {
    return (
      <Form
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
