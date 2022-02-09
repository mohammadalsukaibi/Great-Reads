import React, { Component } from "react";
import "../index.css";
import {Link } from "react-router-dom";
// components
import NavBar from "../components/Navbar";
import BookShelfType from "../components/BookShelfType";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    return (
      <div>
        <div className="books-list">
          <NavBar />
          <div className="books-list_content">
            <div>
              {this.props.books.length > 0 && (
                <BookShelfType
                  books={this.props.books}
                  ChangeShelf={this.props.ChangeShelf}
                />
              )}
            </div>
          </div>
          <div className="search-btn">
            <Link to="/search" className="search-btn-link">Search</Link>
          </div>
        </div>
      </div>
    );
  }
}
