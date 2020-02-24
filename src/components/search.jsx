import React from 'react';
import PropTypes from 'prop-types';
import Shelf from './shelf';
import { search } from '../BooksAPI';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { isResponseValid } from '../utils/utils';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      books: []
    };

    this.search$ = new Subject();
    this.search$.pipe(debounceTime(200)).subscribe(key => {
      if (key) {
        search(key).then(books => {
          if (isResponseValid(books)) {
            this.setState({ books });
          }
        });
      } else {
        this.setState({ books: [] });
      }
    });
  }

  handleKeyUpdate(key) {
    this.search$.next(key);
    this.setState({ key });
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
        <Shelf books={this.state.books} update={(book, shelf) => this.props.update(book, shelf)} />
      </div>
    );
  }
}

Search.propTypes = {
  update: PropTypes.func.isRequired
};

export default Search;
