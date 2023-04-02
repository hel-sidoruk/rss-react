import React, { Component } from 'react';
import { IPost } from '../../types';
import { Card } from '../Card';
import styles from './posts.module.scss';

type Props = { posts: IPost[] };

export class Posts extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.posts}>
        {this.props.posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    );
  }
}
