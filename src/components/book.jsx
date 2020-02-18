import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionDisplay: false,
      status: this.props.status
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.author}</p>
      </div>
    );
  }
}

Book.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default Book;
