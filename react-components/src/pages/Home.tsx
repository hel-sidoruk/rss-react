import React, { Component } from 'react';
import CardsList from '../components/CardsList';
import SearchBar from '../components/SearchBar';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <SearchBar />
          <CardsList size={15} />
        </div>
      </div>
    );
  }
}
