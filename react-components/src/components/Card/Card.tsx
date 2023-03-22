import React, { Component } from 'react';
import CardFooter from './CardFooter';
import styles from './card.module.scss';
import { IPost } from '../../types';

type Props = { post: IPost };

export class Card extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.top}>
          <img src={this.props.post.image} alt="Card image" />
        </div>
        <div className={styles.bottom}>
          <h3 className={styles.title}>{this.props.post.title}</h3>
          <div className={styles.info}>
            <p>{new Date(this.props.post?.date as string).toLocaleDateString()}</p>
            <p>{this.props.post.gender}</p>
          </div>
          <ul className={styles.tags}>
            {this.props.post?.tags.map((tag) => (
              <li key={this.props.post?.id + tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <CardFooter />
        <p>The user agreed to post this</p>
      </div>
    );
  }
}
