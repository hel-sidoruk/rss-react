import React, { Component, MouseEvent } from 'react';
import { tags } from '../../../utils';
import styles from './dropdown.module.scss';

type Props = {
  isOpened: boolean;
  toggleOpen: (e: MouseEvent<HTMLDivElement>) => void;
  tags: string[];
  changeTags: (e: MouseEvent<HTMLLIElement>, tag: string) => void;
};

export default class DropdownComponent extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.dropdown}>
        <div
          className={`${styles.top} ${this.props.isOpened ? styles.opened : ''}`}
          onClick={this.props.toggleOpen}
        >
          {this.props.tags.length
            ? this.props.tags.map((el) => (
                <div key={el + 'tag'} className={styles.tag}>
                  {el}
                </div>
              ))
            : 'Select tags'}
        </div>
        <ul className={`${styles.bottom} ${this.props.isOpened ? styles.active : ''}`}>
          {tags.map((tag) => (
            <li
              key={tag}
              className={`${styles.item} ${this.props.tags.includes(tag) ? styles.marked : ''}`}
              onClick={(e) => this.props.changeTags(e, tag)}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
