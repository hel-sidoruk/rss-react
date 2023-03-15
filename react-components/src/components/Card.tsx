import React, { Component } from 'react';
import CardFooter from './CardFooter';

type Props = { image: string };

export default class Card extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="card__top">
          <img src={this.props.image} alt="Card image" />
        </div>
        <div className="card__bottom">
          <h3 className="card__title">Title</h3>
          <p className="card__descr">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quasi necessitatibus
          </p>
          <div className="card__info">
            <p>20.03.2023</p>
            <p className="card__author">
              by <span>Author</span>
            </p>
          </div>
          <ul className="card__tags">
            <li className="tag">Graphics</li>
            <li className="tag">Design</li>
            <li className="tag">Inspiration</li>
          </ul>
        </div>
        <CardFooter />
      </div>
    );
  }
}
