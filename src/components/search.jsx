import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Shelf from './shelf';
import { search } from '../BooksAPI';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { isResponseValid, checkOnShelf } from '../utils/utils';
import { Lybrary } from '../styled/styled';

const Search = ({ shelfBooks, update }) => {
  const [key, setkey] = useState('');
  const [books, setBooks] = useState([]);
  const _shelfBooks = useRef([]);
  const search$ = useRef(new Subject()).current;

  useEffect(() => {
    search$.pipe(debounceTime(200)).subscribe(key => {
      if (key) {
        search(key).then(books => {
          if (isResponseValid(books)) {
            setBooks(checkOnShelf(_shelfBooks.current, books));
          }
        });
      } else {
        setBooks([]);
      }
    });
    () => search$.unsubscribe();
  }, []);

  // handle shelf update
  useEffect(
    () => {
      _shelfBooks.current = shelfBooks;
      setBooks(checkOnShelf(shelfBooks, books));
    },
    [shelfBooks]
  );

  const handleKeyUpdate = key => {
    search$.next(key);
    setkey(key);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="search"
          id="book-search"
          placeholder="search for a book"
          onChange={event => {
            handleKeyUpdate(event.target.value);
          }}
          value={key}
        />
      </form>
      <Lybrary>
        <Shelf books={books} update={(book, shelf) => update(book, shelf)} />
      </Lybrary>
    </div>
  );
};

Search.propTypes = {
  update: PropTypes.func.isRequired,
  shelfBooks: PropTypes.object.isRequired
};

export default Search;
