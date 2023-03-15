import React, { Component } from 'react';
import { SearchIcon } from '../../Icons';

export class SearchBar extends Component<object, { value: string }> {
  state = { value: '' };

  constructor(props: object) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  componentDidMount() {
    const searchbarValue = localStorage.getItem('searchbarValue');
    if (searchbarValue) this.setState({ value: searchbarValue });
  }

  componentWillUnmount() {
    localStorage.setItem('searchbarValue', this.state.value);
  }

  render() {
    return (
      <div className="searchbar">
        <input
          value={this.state.value}
          onChange={this.handleChange}
          className="searchbar__input"
          placeholder="Search..."
        />
        <SearchIcon />
      </div>
    );
  }
}
