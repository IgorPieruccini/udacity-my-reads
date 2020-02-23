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
 * update the state by the book the uset moved
 * @param {object shelfs array of book} state current state
 * @param {string} id book id to be update
 * @param {string} shelf to be moved
 */
export const updateState = (state, id, shelf) => {
  const books = [...state.currentlyReading, ...state.wantToRead, ...state.read];

  return books.reduce(
    (acc, cur) => {
      const curShelf = cur.id === id ? shelf : cur.shelf;
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
