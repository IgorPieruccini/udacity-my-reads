import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';
import { bookStatus } from '../utils/utils';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { borderStyled } from '../styled/styled';

const Shelf = ({ type, update }) => {
  const handleUpdate = () => {
    update();
  };

  return (
    <ShelfContainer>
      <ShelfTitle>
        <h4>{type}</h4>
      </ShelfTitle>
      <BookContainer>
        <Book
          name={'React for dummies'}
          author={'anonymous'}
          coverUrl={''}
          status={bookStatus.READING}
          update={() => handleUpdate()}
        />
      </BookContainer>
    </ShelfContainer>
  );
};

Shelf.propTypes = {
  type: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired
};

export default Shelf;

export const ShelfTitle = styled.div`
  width: 100%;
  background-color: #56c596;
  padding: 0.75rem;
  color: white;
`;

export const BookContainer = styled(Container)`
  padding: 1rem;
`;

export const ShelfContainer = styled.div`
  ${borderStyled}
  width: 80%;
  margin: 0.5rem;
  overflow: hidden;
`;
