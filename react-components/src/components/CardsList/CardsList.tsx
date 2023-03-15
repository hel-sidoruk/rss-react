import React, { Component } from 'react';
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
        {Array(this.props.size)
          .fill('https://picsum.photos/id/')
          .map((item, i) => (
            <Card key={i} image={`${item}${i + 10}/300/200`} />
          ))}
      </div>
    );
  }
}
