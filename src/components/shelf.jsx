import React from 'react';
import PropTypes from 'prop-types';
import Book from './book/book';
import { bookStatus } from '../utils/utils';
import styled from 'styled-components';
import CardDeck from 'react-bootstrap/CardDeck';
import { borderStyled } from '../styled/styled';

const Shelf = ({ type, update, books }) => {
  const handleUpdate = (book, shelf) => {
    update(book, shelf);
  };

  return (
    <ShelfContainer>
      {type && (
        <ShelfTitle>
          <h4>{type}</h4>
        </ShelfTitle>
      )}
      <BookContainer>
        {books.map(book => {
          return <Book key={book.id} book={book} update={shelf => handleUpdate(book, shelf)} />;
        })}
      </BookContainer>
    </ShelfContainer>
  );
};

Shelf.propTypes = {
  type: PropTypes.string,
  update: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default Shelf;

export const ShelfTitle = styled.div`
  width: 100%;
  background-color: #343a40;
  padding: 0.75rem;
  color: white;
`;

export const BookContainer = styled(CardDeck)`
  padding: 1rem;
`;

export const ShelfContainer = styled.div`
  ${borderStyled}
  width: 80%;
  margin: 0.5rem;
  overflow: hidden;
  background-color: white;
`;
