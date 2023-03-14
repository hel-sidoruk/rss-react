import React, { Component } from 'react';
import EyeIcon from '../Icons/EyeIcon';
import LikeIcon from '../Icons/LikeIcon';
import StarIcon from '../Icons/StarIcon';

export default class CardFooter extends Component {
  render() {
    return (
      <div className="card__footer">
        <div className="card__control">
          <LikeIcon />
          {Math.round(Math.random() * 1000)}
        </div>
        <div className="card__control">
          <EyeIcon />
          {Math.round(Math.random() * 1000)}
        </div>
        <div className="card__star">
          <StarIcon />
        </div>
      </div>
    );
  }
}
