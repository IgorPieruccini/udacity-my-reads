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
