/**
 * types of shelfs used in the app
 * it's used to distinguish shelf types and labels
 */
export const bookStatus = {
  READ: 'Read',
  READING: 'Currently Reading',
  WANT_TO_READ: 'Want to Read',
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
