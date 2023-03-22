import React, { Component } from 'react';
import { mockPosts } from '../../utils/mockPosts';
import { Card } from '../Card';
import styles from './cardslist.module.scss';

export class CardsList extends Component {
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
