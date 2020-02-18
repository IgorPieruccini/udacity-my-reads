import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';
import { bookStatus } from '../utils/utils';

const Shelf = ({ type }) => {
  return (
    <div>
      <h3>{type}</h3>
      <Book name={'React for dummies'} author={'anonymous'} coverUrl={''} status={bookStatus.READING} />
    </div>
  );
};

Shelf.propTypes = {
  type: PropTypes.string.isRequired
};

export default Shelf;
