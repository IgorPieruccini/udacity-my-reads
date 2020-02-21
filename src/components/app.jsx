import React from 'react';
import Shelf from './shelf';
import Header from './header';
import Search from './search';
import styled from 'styled-components';
import { bookStatus } from '../utils/utils';
import { flexStyled } from '../styled/styled';
import { getAll } from '../BooksAPI';

class App extends React.Component {
  componentDidMount() {
    getAll().then(res => console.log(res));
  }

  render() {
    return (
      <div>
        <Header />
        <Search
          update={key => {
            console.log('search update', key);
          }}
        />
        <Lybrary>
          <Shelf type={bookStatus.READING} update={() => console.log('got an update')} />
          <Shelf type={bookStatus.WANT_TO_READ} update={() => console.log('got an update')} />
          <Shelf type={bookStatus.READ} update={() => console.log('got an update')} />
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
