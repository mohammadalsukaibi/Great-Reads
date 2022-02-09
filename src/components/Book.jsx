import React, { Component } from "react";
import "../index.css";
import ShelfOptions from "./ShelfOptions";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <li>
        <div className="book">
          <div className="book-position">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:`url(${this.props.data.imageLinks.thumbnail})`
              }}
            ></div>
            <ShelfOptions data={this.props.data} ChangeShelf={this.props.ChangeShelf} books={this.props.books} />
          </div>
          <div className="book-title">{this.props.data.title}</div>
          <div className="book-author">{this.props.data.authors[0]}</div>
        </div>
      </li>
    );
  }
}
