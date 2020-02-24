import React from 'react';
import Shelf from './shelf';
import Header from './header';
import Search from './search';
import { bookStatus, sortBooksByShelf, updateState, isResponseValid } from '../utils/utils';
import { Lybrary } from '../styled/styled';
import { getAll, update, search } from '../BooksAPI';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const initialState = {
  currentlyReading: [],
  wantToRead: [],
  read: []
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    getAll()
      .then(books => this.setState(sortBooksByShelf(books)))
      .catch(e => console.log(e));
  }

  handleUpdate(book, shelf) {
    update(book, shelf).then(res => {
      if (isResponseValid(res)) {
        this.setState(updateState(this.state, book, shelf));
      }
    });
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact
              path={'/'}
              render={() => (
                <div>
                  <Header />
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
                    <Shelf
                      type={bookStatus.READ}
                      books={this.state.read}
                      update={(book, shelf) => this.handleUpdate(book, shelf)}
                    />
                  </Lybrary>
                </div>
              )}
            />
            <Route
              path={'/search'}
              render={() => (
                <Search
                  update={(book, shelf) => {
                    this.handleUpdate(book, shelf);
                  }}
                  shelfBooks={this.state}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
