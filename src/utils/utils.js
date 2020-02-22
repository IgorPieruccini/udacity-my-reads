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
 * uses the update data from server to return a new state;
 * always use the update from server to make sure its sync with the server
 * @param {object shelfs array of book} state
 * @param {object shelfs array of ids} update
 */
export const updateState = (state, update) => {
  const books = [...state.currentlyReading, ...state.wantToRead, ...state.read];
  return {
    currentlyReading: books.filter(book => update.currentlyReading.find(id => id === book.id)),
    wantToRead: books.filter(book => update.wantToRead.find(id => id === book.id)),
    read: books.filter(book => update.read.find(id => id === book.id))
  };
};
