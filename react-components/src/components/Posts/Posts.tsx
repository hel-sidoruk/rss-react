import React, { Component } from 'react';
import { PostsContext, PostsContextType } from '../../context/PostsContext';
import { Card } from '../Card';
import styles from './posts.module.scss';

export class Posts extends Component {
  render() {
    return (
      <div className={styles.posts}>
        {(this.context as PostsContextType).posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

Posts.contextType = PostsContext;
