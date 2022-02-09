import React, { Component } from "react";
import "../index.css";
import BookList from "./BookList";

export default class BookShelfType extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { books, ChangeShelf } = this.props;
    const shelfTypes = [
      { type: "currentlyReading", title: "Currently Reading" },
      { type: "wantToRead", title: "Want to Read" },
      { type: "read", title: "Read" },
    ];
    return (
    <div className="list-books-content">
        {shelfTypes.map((shelf, index) => {
          const shelfBooks = books.filter(book => book.shelf === shelf.type);
          return (
            <div key={index}>
              
              <div className="bookshelf-books">
                <BookList books={shelfBooks} ChangeShelf={ChangeShelf} title={shelf.title} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
