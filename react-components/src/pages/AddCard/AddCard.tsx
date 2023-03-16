import React, { Component } from 'react';
import { AddCardForm } from '../../components/AddCardForm';
import { Posts } from '../../components/Posts';
import { PostsContext, PostsContextType } from '../../context/PostsContext';
import { IPost } from '../../types';
import { posts } from '../../utils';
import styles from './add-card.module.scss';

export class AddCard extends Component<object, PostsContextType> {
  addPost: (post: IPost | null) => void;
  constructor(props: object) {
    super(props);
    this.addPost = (post: IPost | null) => {
      this.setState(({ posts }) => ({ posts: post ? [...posts, post] : posts }));
    };
    this.state = { posts, addPost: this.addPost };
  }
  render() {
    return (
      <PostsContext.Provider value={this.state}>
        <div className={styles.section}>
          <div className={`container ${styles.container}`}>
            <AddCardForm />
            <Posts />
          </div>
        </div>
      </PostsContext.Provider>
    );
  }
}
