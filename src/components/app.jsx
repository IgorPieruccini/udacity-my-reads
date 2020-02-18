import React from 'react';
import Shelf from './shelf';
import { bookStatus } from '../utils/utils';
import Header from './header';
import Search from './search';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Search
          update={key => {
            console.log('search update', key);
          }}
        />
        <Shelf type={bookStatus.READING} />
        <Shelf type={bookStatus.WANT_TO_READ} />
        <Shelf type={bookStatus.READ} />
      </div>
    );
  }
}

export default App;
