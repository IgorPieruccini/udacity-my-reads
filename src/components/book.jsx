import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import _Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import _Button from 'react-bootstrap/Button';
import { bookStatus } from '../utils/utils';
import styled from 'styled-components';
import coverFallbackImage from '../assets/cover_fallback.png';
import { MdModeEdit } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { roundButtonStyled, flexStyled } from '../styled/styled';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionDisplay: false,
      status: this.props.status,
      bookCover: this.props.coverUrl
    };
  }

  loadCoverFallback() {
    this.setState({ bookCover: coverFallbackImage });
  }

  handleOptionDisplay() {
    this.setState({ optionDisplay: !this.state.optionDisplay });
  }

  handleUpdateOption() {
    this.props.update();
  }

  optionSettings() {
    return (
      <Container>
        {this.state.status !== bookStatus.READING && (
          <Col className={'mt-5'}>
            <Button width={100} variant="outline-dark" onClick={() => this.handleUpdateOption()}>
              {bookStatus.READING}
            </Button>
          </Col>
        )}
        {this.state.status !== bookStatus.WANT_TO_READ && (
          <Col>
            <Button variant="outline-dark" onClick={() => this.handleUpdateOption()}>
              {bookStatus.WANT_TO_READ}
            </Button>
          </Col>
        )}
        {this.state.status !== bookStatus.READ && (
          <Col>
            <Button width={100} variant="outline-dark" onClick={() => this.handleUpdateOption()}>
              {bookStatus.READ}
            </Button>
          </Col>
        )}
      </Container>
    );
  }

  render() {
    return (
      <Card style={{ width: '14rem' }}>
        <BookCover>
          {!this.state.optionDisplay && (
            <CardImage variant="top" src={this.state.bookCover} onError={() => this.loadCoverFallback()} />
          )}
          {this.state.optionDisplay && this.optionSettings()}
        </BookCover>
        <RoundButton onClick={() => this.handleOptionDisplay()}>
          {!this.state.optionDisplay ? <MdModeEdit /> : <MdClose />}
        </RoundButton>
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
  status: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired
};

export default Book;

const Button = styled(_Button)`
  width: 100%;
  margin: 2px;
`;

const Container = styled(_Container)`
  margin: 0 5px 0 5px;
`;

const BookCover = styled(_Container)`
  width: 90%;
  height: 200px;
  padding: 0px;
  ${flexStyled}
`;

const CardImage = styled(Card.Img)`
  width: 70%;
`;

const RoundButton = styled(_Button)`
  align-self: flex-end;
`;
