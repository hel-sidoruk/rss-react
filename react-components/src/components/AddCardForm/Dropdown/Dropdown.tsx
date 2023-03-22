import React, { Component, MouseEvent } from 'react';
import { ErrorsState } from '../../../types';
import DropdownComponent from './DropdownComponent';

type State = { isOpened: boolean };
type Props = {
  tags: string[];
  changeTags: (tag: string) => void;
  clearError: (error: keyof ErrorsState) => void;
  error: boolean;
};

export class Dropdown extends Component<Props, State> {
  state: State = { isOpened: false };
  constructor(props: Props) {
    super(props);
  }

  componentDidMount = () => document.body.addEventListener('click', this.close);
  componentWillUnmount = () => document.body.removeEventListener('click', this.close);

  close = () => this.setState({ isOpened: false });

  toggleOpen = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    this.setState(({ isOpened }) => ({ isOpened: !isOpened }));
  };

  changeTags = (e: MouseEvent<HTMLLIElement>, tag: string) => {
    e.stopPropagation();
    if (this.props.error && !this.props.tags.length) this.props.clearError('tags');
    this.props.changeTags(tag);
  };

  render() {
    return (
      <DropdownComponent
        isOpened={this.state.isOpened}
        toggleOpen={this.toggleOpen}
        tags={this.props.tags}
        changeTags={this.changeTags}
      />
    );
  }
}
