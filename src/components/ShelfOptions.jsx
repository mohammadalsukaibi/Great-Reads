import React, { Component } from "react";
import "../index.css";

export default class ShelfOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event) => {
    this.props.ChangeShelf(this.props.data, event.target.value);
  };

  render() {

    let currentShelf = "none";
    for (let item of this.props.books) {
        if (item.id === this.props.data.id) {
          currentShelf = item.shelf;
          break;
        }
    }
    return (
      <div className="shelf-shfiter">
        <select onChange={this.handleChange} defaultValue={currentShelf}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
