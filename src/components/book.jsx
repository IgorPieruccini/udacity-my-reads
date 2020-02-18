import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
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
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.coverUrl} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.author}</Card.Text>
        </Card.Body>
      </Card>
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
