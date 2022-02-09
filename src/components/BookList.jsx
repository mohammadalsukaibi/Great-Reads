import React, { Component } from "react";
import "../index.css";
import Book from "./Book";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="shelf">
        <div className="shelf-books">
          <ol className="books-box">
            {this.props.books.length > 0 && this.props.books.map((book) => <Book key={book.id} data={book} ChangeShelf={this.props.ChangeShelf} books={this.props.books}  />)}
          </ol>
        </div>
      </div>
    );
  }
}
