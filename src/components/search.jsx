import React from 'react';
import PropTypes from 'prop-types';
import Shelf from './shelf';
import { search } from '../BooksAPI';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      books: []
    };
  }

  handleKeyUpdate(key) {
    this.setState({ key });
    this.handleSearch(key);
  }

  handleSearch(key) {
    search(key).then(books => this.setState({ books }));
  }

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            name="search"
            id="book-search"
            placeholder="search for a book"
            onChange={event => {
              this.handleKeyUpdate(event.target.value);
            }}
            value={this.state.key}
          />
        </form>
        <Shelf books={this.state.books} update={(book, shelf) => this.handleUpdate(book, shelf)} />
      </div>
    );
  }
}

Search.propTypes = {
  update: PropTypes.func.isRequired
};

export default Search;
