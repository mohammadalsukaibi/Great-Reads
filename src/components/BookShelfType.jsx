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
    console.log(books);
    const shelfTypes = [
      { type: "currentlyReading", title: "Currently Reading" },
      { type: "wantToRead", title: "Want to Read" },
      { type: "read", title: "Read" },
    ];
    return (
    //   <div className="shelf">
    //     <h2 className="shelf-title">{this.props.text}</h2>
    //     <div className="shelf-books">
    //       <ol className="books-box">
    //         {this.props.books.length > 0 &&
    //           this.props.books.map((book) => (
    //             <Book key={book.id} data={book} />
    //           ))}
    //       </ol>
    //     </div>
    //   </div>
    <div className="list-books-content">
        {shelfTypes.map((shelf, index) => {
          const shelfBooks = books.filter(book => book.shelf === shelf.type);
          return (
            <div key={index}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <BookList books={shelfBooks} ChangeShelf={ChangeShelf} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
