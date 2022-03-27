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
                backgroundImage:this.props.data.imageLinks ? `url(${this.props.data.imageLinks.thumbnail})` : `url(https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif)`
              }}
            ></div>
            <ShelfOptions data={this.props.data} ChangeShelf={this.props.ChangeShelf} books={this.props.books} />
          </div>
          <div className={window.location.pathname === "/search" ? 'book-title-search' : 'book-title'}>{this.props.data.title}</div>
          <div className="book-author">{
          this.props.data.authors.map(function(item, index) {
            return <span key={index}>{ (index ? ', ' : '') + item }</span>;
          })
        }</div>
        </div>
      </li>
    );
  }
}
