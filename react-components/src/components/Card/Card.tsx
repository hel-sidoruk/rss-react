import React, { Component } from 'react';
import CardFooter from './CardFooter';
import styles from './card.module.scss';

type Props = { image: string };

export class Card extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.top}>
          <img src={this.props.image} alt="Card image" />
        </div>
        <div className={styles.bottom}>
          <h3 className={styles.title}>Title</h3>
          <p className={styles.descr}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quasi necessitatibus
          </p>
          <div className={styles.info}>
            <p>20.03.2023</p>
            <p className={styles.author}>
              by <span>Author</span>
            </p>
          </div>
          <ul className={styles.tags}>
            <li className={styles.tag}>Graphics</li>
            <li className={styles.tag}>Design</li>
            <li className={styles.tag}>Inspiration</li>
          </ul>
        </div>
        <CardFooter />
      </div>
    );
  }
}
