import React, { Component } from 'react';
import { Dropdown } from '../Dropdown';

export class AddCardForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" placeholder="Title" />
        <label htmlFor="author">Your name</label>
        <input id="author" type="text" placeholder="Your name" />
        <label htmlFor="description">Description</label>
        <textarea id="description" placeholder="Description" />
        <input type="file" />
        <Dropdown />
      </form>
    );
  }
}
