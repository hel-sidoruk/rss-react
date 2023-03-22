import React, { Component } from 'react';
import { AddCardForm } from '../../components/AddCardForm';
import { Posts } from '../../components/Posts';
import { IPost } from '../../types';
import styles from './add-card.module.scss';

export class AddCard extends Component<object, { posts: IPost[] }> {
  state = { posts: [] };

  addPost = (post: IPost) => this.setState(({ posts }) => ({ posts: [...posts, post] }));
  render() {
    return (
      <div className={styles.section}>
        <div className={`container ${styles.container}`}>
          <h1 className={styles.title}>Add Card</h1>
          <AddCardForm addPost={this.addPost} />
          <Posts posts={this.state.posts} />
        </div>
      </div>
    );
  }
}
