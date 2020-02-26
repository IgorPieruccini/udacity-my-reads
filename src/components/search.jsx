import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Shelf from './shelf';
import { search } from '../BooksAPI';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { isResponseValid, checkOnShelf } from '../utils/utils';
import { Lybrary, HeaderStyle } from '../styled/styled';
import { Link } from 'react-router-dom';
import { Col, Badge, Row } from 'react-bootstrap';
import { MdBook } from 'react-icons/md';

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
      <HeaderStyle fluid>
        <Row>
          <Col style={{ marginTop: 5 }} xs={7} sm={9} md={10} lg={10}>
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
          </Col>
          <Col style={{ textAlign: 'center', marginTop: 5 }} xs={2} sm={2} md={2} lg={2}>
            <Link to="/">
              <Badge variant="light">
                <MdBook /> my books
              </Badge>
            </Link>
          </Col>
        </Row>
      </HeaderStyle>
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
