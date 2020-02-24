/**
 * types of shelfs used in the app
 * it's used to distinguish shelf types and labels
 */
export const bookStatus = {
  READ: 'read',
  READING: 'currentlyReading',
  WANT_TO_READ: 'wantToRead',
  NONE: 'no_status'
};

/**
 * Shelf are defined by bookStatus
 */
export const shelfTypes = bookStatus.READ | bookStatus.READING | bookStatus.WANT_TO_READ;

/**
 * separete array of books into arrays of books per chelf type
 * @param {array books}
 */
export const sortBooksByShelf = books => {
  return books.reduce(
    (acc, cur) => {
      return {
        ...acc,
        [cur.shelf]: [...acc[cur.shelf], cur]
      };
    },
    { currentlyReading: [], wantToRead: [], read: [] }
  );
};

/**
 * update the state by the book the user moved
 * @param {object shelfs array of book} state current state
 * @param {string} book to be update
 * @param {string} shelf to be moved
 */
export const updateState = (state, book, shelf) => {
  console.log('state', state);
  const books = [...state.currentlyReading, ...state.wantToRead, ...state.read];
  // if its a new book
  if (!book.shelf) {
    books.push(book);
  }
  return books.reduce(
    (acc, cur) => {
      const curShelf = cur.id === book.id ? shelf : cur.shelf;
      return {
        ...acc,
        [curShelf]: [...acc[curShelf], { ...cur, shelf: curShelf }]
      };
    },
    {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  );
};

/**
 * check if response from server is not an error
 * @param {any} data
 */
export const isResponseValid = data => {
  return data && !data.hasOwnProperty('error');
};

/**
 * set searchBooks a shelf if is alredy on the user shelf
 * @param {array} shelfBooks
 * @param {array} searchBooks
 */
export const checkOnShelf = (shelfBooks, searchBooks) => {
  const books = [...shelfBooks.currentlyReading, ...shelfBooks.wantToRead, ...shelfBooks.read];
  return searchBooks.map(book => books.find(shelfBook => shelfBook.id === book.id) ?? book);
};
