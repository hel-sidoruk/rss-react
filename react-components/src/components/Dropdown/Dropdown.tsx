import React, { Component } from 'react';
import styles from './dropdown.module.scss';

const tags = ['Graphics', 'Design', 'Inspiration', 'Art', 'Modern', 'Architecture', 'Vintage'];

type State = { isOpened: boolean };
type Props = {
  tags: string[];
  changeTags: (e: React.MouseEvent<HTMLLIElement>, tag: string) => void;
};

export class Dropdown extends Component<Props, State> {
  state: State = { isOpened: false };

  constructor(props: Props) {
    super(props);
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
          {this.props.tags.length
            ? this.props.tags.map((el) => (
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
