import React, { Component } from "react";
import "./index.css";
import { getAllBooks, updateBook } from "./Api";
// components
import NavBar from "./components/Navbar";
import BookList from "./components/BookList";
import BookShelfType from "./components/BookShelfType";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AllBooks: {},
    };
  }

  componentDidMount() {
    //check if state is empty or not then call
    getAllBooks().then((res) => {
      this.setState({ AllBooks: res });
    });
  }

  ChangeShelf = (book, shelf) => {


    // this.setState(prev => ({ AllBooks: this.prev.AllBooks.filter(newBook => newBook.id !== book.id) }));
    book.shelf = shelf;
    this.setState({AllBooks: this.state.AllBooks.filter(newBook => newBook.id !== book.id).concat(book)})
    console.log(this.state.AllBooks);
    

    // updateBook(book.id, shelf).then((res) => {
    //   // change book shelf
    //   book.shelf = shelf;

    //   this.setState({ AllBooks: AllBooks.filter(newBook => newBook.id !== book.id) });
    //   console.log("shelf changed");
    // });
  };

  render() {
    console.log("render");
    return (
      <div>
        <div className="books-list">
          <NavBar />
          <div className="books-list_content">
            <div>
              {this.state.AllBooks.length > 0 && (
                <BookShelfType
                  books={this.state.AllBooks}
                  ChangeShelf={this.ChangeShelf}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
