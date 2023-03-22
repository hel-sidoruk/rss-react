import React, { Component } from 'react';
import CardFooter from './CardFooter';
import styles from './card.module.scss';
import { IPost } from '../../types';

type Props = { image?: string; post?: IPost };

export class Card extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.top}>
          <img src={this.props.post ? this.props.post.image : this.props.image} alt="Card image" />
        </div>
        <div className={styles.bottom}>
          <h3 className={styles.title}>{this.props.post ? this.props.post.title : 'Title'}</h3>
          <p className={styles.descr}>
            {this.props.post
              ? this.props.post.text
              : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quasi necessitatibus'}
          </p>
          <div className={styles.info}>
            <p>{this.props.post?.date}</p>
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
      </div>
    );
  }
}
