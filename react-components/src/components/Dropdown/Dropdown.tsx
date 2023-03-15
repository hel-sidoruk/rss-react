import React, { Component } from 'react';
import styles from './dropdown.module.scss';

const tags = ['Graphics', 'Design', 'Inspiration', 'Art', 'Modern', 'Architecture', 'Vintage'];

type State = { tags: string[]; isOpened: boolean };

export class Dropdown extends Component<object, State> {
  state: State = { tags: [], isOpened: false };

  constructor(props: object) {
    super(props);
    this.changeTags = this.changeTags.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.close);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.close);
  }

  close() {
    this.setState({ isOpened: false });
  }

  changeTags(e: React.MouseEvent<HTMLLIElement>, tag: string) {
    e.stopPropagation();
    this.setState(({ tags }) => ({
      tags: tags.includes(tag) ? tags.filter((el) => el !== tag) : [...tags, tag],
    }));
  }

  toggleOpen(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    this.setState(({ isOpened }) => ({ isOpened: !isOpened }));
  }

  render() {
    return (
      <div className={styles.dropdown}>
        <div
          className={`${styles.top} ${this.state.isOpened ? styles.opened : ''}`}
          onClick={this.toggleOpen}
        >
          {this.state.tags.length
            ? this.state.tags.map((el) => (
                <div key={el + '1'} className={styles.tag}>
                  {el}
                </div>
              ))
            : 'Select tags'}
        </div>
        <ul className={`${styles.bottom} ${this.state.isOpened ? styles.active : ''}`}>
          {tags.map((tag) => (
            <li
              key={tag}
              className={`${styles.item} ${this.state.tags.includes(tag) ? styles.marked : ''}`}
              onClick={(e) => this.changeTags(e, tag)}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
