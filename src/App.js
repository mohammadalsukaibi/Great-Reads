import React, { useState,useEffect } from "react";
import "./index.css";
import { getAllBooks, updateBook } from "./Api";
import { Routes, Route } from "react-router-dom";
// components
import Search from "./components/Search";
import Home from "./pages/Home";

export default function App() {


  const [allBooks, setallBooks] = useState([])
  const [loading, setaloading] = useState(false)

  useEffect(() => {
    getAllBooks().then((res) => {
      setallBooks(res);
    });
  
  }, [])
  


  const ChangeShelf = (book, shelf) => {
    updateBook(book.id, shelf).then((res) => {});
    // change book shelf
    book.shelf = shelf;
    setallBooks(
       allBooks.filter(
        (newBook) => newBook.id !== book.id
      ).concat(book),
    );
  };


    return (
      <div>
        <Routes>
          <Route path="/" element={<Home ChangeShelf={ChangeShelf} books={allBooks} />} />
          <Route path="/search" element={<Search ChangeShelf={ChangeShelf}/>} />
        </Routes>
      </div>
    );
  
}
