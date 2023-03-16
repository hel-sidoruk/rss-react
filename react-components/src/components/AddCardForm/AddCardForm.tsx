import React, { Component, createRef } from 'react';
import { PostsContext, PostsContextType } from '../../context/PostsContext';
import { IPost } from '../../types';
import { randomId } from '../../utils';
import { Dropdown } from '../Dropdown';
import FileInput from './FileInput';
import styles from './form.module.scss';

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

  changeTags(e: React.MouseEvent<HTMLLIElement>, tag: string) {
    e.stopPropagation();
    this.setState(({ tags }) => ({
      tags: tags.includes(tag) ? tags.filter((el) => el !== tag) : [...tags, tag],
    }));
  }

  changeImage(image: string | ArrayBuffer) {
    this.setState({ image });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.onSubmit}>
        <input ref={this.titleInput} className={styles.input} placeholder="Title" />
        <input ref={this.authorInput} className={styles.input} placeholder="Your name" />
        <textarea
          ref={this.textInput}
          className={`${styles.textarea} ${styles.input}`}
          spellCheck="false"
          placeholder="Text"
        />
        <FileInput changeImage={this.changeImage} image={this.state.image} />
        <div className={styles.footer}>
          <Dropdown tags={this.state.tags} changeTags={this.changeTags} />
          <button type="submit" className={styles.btn}>
            Create
          </button>
        </div>
      </form>
    );
  }
}

AddCardForm.contextType = PostsContext;
