const books = [
  {
    title: 'The Linux Command Line',
    subtitle: 'A Complete Introduction',
    authors: ['Harmeet Singh', 'Mehul Bhatt'],
    id: 'nggnmAEACAAJ',
    shelf: 'currentlyReading'
  },
  {
    title: 'Learning Web Development with React and Bootstrap',
    authors: ['William E. Shotts, Jr.'],
    id: '1wy49i-gQjIC',
    shelf: 'currentlyReading'
  },
  {
    title: "The Cuckoo's Calling",
    authors: ['Robert Galbraith'],
    id: '74XNzF_al3MC',
    shelf: 'wantToRead'
  },
  {
    title: 'Needful Things',
    authors: ['Stephen King'],
    id: 'evuwdDLfAyYC',
    shelf: 'wantToRead'
  },
  {
    title: 'Memory',
    authors: ['Stephen King'],
    id: 'jAUODAAAQBAJ',
    shelf: 'read'
  },

  {
    title: 'Memory 2',
    authors: ['Stephen King'],
    id: 'IOejDAAAQBAJ',
    shelf: 'read'
  }
];

export const getAll = async () => books;

export const update = async (book, shelf) => {
  const updateBooks = books.map(curBook => (curBook.id === book.id ? { ...curBook, shelf } : curBook));
  return {
    currentlyReading: updateBooks.filter(book => book.shelf === 'currentlyReading').map(book => book.id),
    wantToRead: updateBooks.filter(book => book.shelf === 'wantToRead').map(book => book.id),
    read: updateBooks.filter(book => book.shelf === 'read').map(book => book.id)
  };
};
