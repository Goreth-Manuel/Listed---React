import React, { Component } from 'react';
import '../Styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <span>Listed</span>
        <nav>
          <ul>
            <li>Home</li>
            <li>Listings</li>
            <li>
              About <i className="fa fa-angle-down"></i>
            </li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
}
