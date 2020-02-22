import React from 'react';
import Shelf from './shelf';
import Header from './header';
import Search from './search';
import styled from 'styled-components';
import { bookStatus, sortBooksByShelf } from '../utils/utils';
import { flexStyled } from '../styled/styled';
import { getAll, update } from '../BooksAPI';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    };
  }

  componentDidMount() {
    getAll()
      .then(books => this.setState(sortBooksByShelf(books)))
      .catch(e => console.log(e));
  }

  handleUpdate(book, shelf) {
    update(book, shelf).then(res => console.log('res:', res));
  }
  render() {
    return (
      <div style={{ backgroundColor: '#f0f0f0' }}>
        <Header />
        <Search
          update={key => {
            console.log('search update', key);
          }}
        />
        <Lybrary>
          <Shelf
            type={bookStatus.READING}
            books={this.state.currentlyReading}
            update={(book, shelf) => this.handleUpdate(book, shelf)}
          />
          <Shelf
            type={bookStatus.WANT_TO_READ}
            books={this.state.wantToRead}
            update={(book, shelf) => this.handleUpdate(book, shelf)}
          />
          <Shelf type={bookStatus.READ} books={this.state.read} update={(book, shelf) => this.handleUpdate(book, shelf)} />
        </Lybrary>
      </div>
    );
  }
}

export default App;

const Lybrary = styled.div`
  ${flexStyled}
  flex-direction: column;
`;
