import React, { Component } from 'react';
import { Card } from '../Card';

type Props = { size: number };

export class CardsList extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="cards">
        {Array(this.props.size)
          .fill('https://picsum.photos/id/')
          .map((item, i) => (
            <Card key={i} image={`${item}${i + 10}/300/200`} />
          ))}
      </div>
    );
  }
}
