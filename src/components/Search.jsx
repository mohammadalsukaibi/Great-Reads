import React, { Component } from "react";
import "../index.css";
import { Routes, Route, Link } from "react-router-dom";
import { searchBook } from "../Api";
import Book from "./Book";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBooks: {},
    };
  }

  ChangeHandler = (e) => {
    const searchQuery = e.target.value;
    if (searchQuery) {
      searchBook(searchQuery).then((res) => {
        console.log(res);
        this.setState({ searchBooks: res });
      });
    }
  };

  render() {
    return (
      <div className="main">
        <div className="search-container">
          <div className="search-container-bar">
            <Link to="/" className="close-btn-bar"></Link>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Search..."
                onChange={this.ChangeHandler}
              />
            </div>
          </div>
          <div className="search-results">
            {/* <BookList books={this.state.searchBooks} /> */}
            <ol className="books-box">
            {this.state.searchBooks.length > 0 && this.state.searchBooks.map((book) => <Book key={book.id} data={book} ChangeShelf={this.props.ChangeShelf}  books={this.state.searchBooks}  />)}
            
            </ol>
            
          </div>
        </div>
      </div>
    );
  }
}
