import React, { Component } from "react";
import "./index.css";
import { getAllBooks, updateBook, searchBook } from "./Api";
import { Routes, Route, Link } from "react-router-dom";
// components
import NavBar from "./components/Navbar";
import BookShelfType from "./components/BookShelfType";
import Search from "./components/Search";
import Home from "./pages/Home";

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
    updateBook(book.id, shelf).then((res) => {});
    // change book shelf
    book.shelf = shelf;
    this.setState({
      AllBooks: this.state.AllBooks.filter(
        (newBook) => newBook.id !== book.id
      ).concat(book),
    });
  };

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home ChangeShelf={this.ChangeShelf} books={this.state.AllBooks} />} />
          <Route path="/search" element={<Search ChangeShelf={this.ChangeShelf}/>} />
        </Routes>
      </div>
    );
  }
}
