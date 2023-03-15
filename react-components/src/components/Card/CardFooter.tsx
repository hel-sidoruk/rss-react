import React, { Component } from 'react';
import * as Icons from '../../Icons';
import styles from './card.module.scss';

export default class CardFooter extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.control}>
          <Icons.LikeIcon />
          {Math.round(Math.random() * 1000)}
        </div>
        <div className={styles.control}>
          <Icons.EyeIcon />
          {Math.round(Math.random() * 1000)}
        </div>
        <div className={styles.star}>
          <Icons.StarIcon />
        </div>
      </div>
    );
  }
}
