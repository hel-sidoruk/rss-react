import React, { Component } from 'react';
import { mockPosts } from '../../utils/mockPosts';
import { Card } from '../Card';
import styles from './cardslist.module.scss';

type Props = { size: number };

export class CardsList extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.list}>
        {mockPosts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    );
  }
}
