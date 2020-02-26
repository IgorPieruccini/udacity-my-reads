import React from 'react';
import PropTypes from 'prop-types';
import { bookStatus, shelfTitles } from '../utils/utils';
import coverFallbackImage from '../assets/cover_fallback.png';
import { MdClose, MdFavorite, MdModeEdit } from 'react-icons/md';
import { Button, Container, Col, Card, Row } from 'react-bootstrap';
import styled from 'styled-components';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionDisplay: false,
      bookCover: this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : coverFallbackImage
    };
  }

  loadCoverFallback() {
    this.setState({ bookCover: coverFallbackImage });
  }

  handleOptionDisplay() {
    this.setState({ optionDisplay: !this.state.optionDisplay });
  }

  handleUpdateOption(shelf) {
    this.props.update(shelf);
  }

  optionSettings() {
    return (
      <Container style={{ top: '0', position: 'absolute', backgroundColor: '#ffffffcf', height: '100%' }} fluid>
        <Row>
          {this.props.book.shelf !== bookStatus.READING && (
            <Col sm={11} style={{ margin: '2px 0 2px 0' }}>
              <Button
                style={{ width: '100%', padding: 0 }}
                variant={this.props.book.shelf === bookStatus.READING ? 'secundary' : 'outline-dark'}
                onClick={() => this.handleUpdateOption(bookStatus.READING)}
              >
                {shelfTitles[bookStatus.READING]}
              </Button>
            </Col>
          )}

          {this.props.book.shelf !== bookStatus.WANT_TO_READ && (
            <Col sm={11} style={{ margin: '2px 0 2px 0' }}>
              <Button
                style={{ width: '100%', padding: 0 }}
                variant="outline-dark"
                onClick={() => this.handleUpdateOption(bookStatus.WANT_TO_READ)}
              >
                {shelfTitles[bookStatus.WANT_TO_READ]}
              </Button>
            </Col>
          )}
          {this.props.book.shelf !== bookStatus.READ && (
            <Col sm={11} style={{ margin: '2px 0 2px 0' }}>
              <Button
                style={{ width: '100%', padding: 0 }}
                variant="outline-dark"
                onClick={() => this.handleUpdateOption(bookStatus.READ)}
              >
                {shelfTitles[bookStatus.READ]}
              </Button>
            </Col>
          )}
        </Row>
      </Container>
    );
  }

  render() {
    return (
      <Card style={{ minWidth: '180px', maxWidth: '180px', border: 'none' }}>
        <Container style={{ width: '12rem', minHeight: '12rem', height: '12rem', overflow: 'hidden' }}>
          <Card.Img
            style={{ width: '100%', height: 'auto' }}
            variant="top"
            src={this.state.bookCover}
            onError={() => this.loadCoverFallback()}
          />
          {this.state.optionDisplay && this.optionSettings()}
        </Container>
        <Button
          variant="dark"
          style={{ position: 'absolute', top: '10rem', right: '0rem' }}
          onClick={() => this.handleOptionDisplay()}
        >
          {!this.state.optionDisplay ? <MdModeEdit /> : <MdClose />}
        </Button>
        <Card.Body>
          {this.props.book.shelf && this.props.onSearch && (
            <OnShelf>
              <MdFavorite />
              On your shelf
            </OnShelf>
          )}
          <Card.Title style={{ fontSize: 16 }}>{this.props.book.title}</Card.Title>
          {this.props.book.authors &&
            this.props.book.authors.map(author => {
              return (
                <Card.Text key={author} className="blockquote-footer">
                  {author}
                </Card.Text>
              );
            })}
        </Card.Body>
      </Card>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  onSearch: PropTypes.bool.isRequired
};

export default Book;

const OnShelf = styled.div`
  color: #ff4f4f;
`;
