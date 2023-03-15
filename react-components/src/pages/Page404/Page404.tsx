import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Page404 extends Component {
  render() {
    return (
      <div className="page-404">
        <div className="container">
          <h1 className="page-404__title">404 Not found</h1>
          <p className="page-404__text">We couldn&apos;t find this page :(</p>
          <Link className="page-404__link" to="/">
            Back home
          </Link>
        </div>
      </div>
    );
  }
}
