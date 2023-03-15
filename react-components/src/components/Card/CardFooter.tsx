import React, { Component } from 'react';
import * as Icons from '../../Icons';

export default class CardFooter extends Component {
  render() {
    return (
      <div className="card__footer">
        <div className="card__control">
          <Icons.LikeIcon />
          {Math.round(Math.random() * 1000)}
        </div>
        <div className="card__control">
          <Icons.EyeIcon />
          {Math.round(Math.random() * 1000)}
        </div>
        <div className="card__star">
          <Icons.StarIcon />
        </div>
      </div>
    );
  }
}
