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
    id: 'sJf1vQAACAAJ',
    shelf: 'currentlyReading'
  },
  {
    title: "The Cuckoo's Calling",
    authors: ['Robert Galbraith'],
    id: 'evuwdDLfAyYC',
    shelf: 'wantToRead'
  },
  {
    title: 'Needful Things',
    authors: ['Stephen King'],
    id: 'jAUODAAAQBAJ',
    shelf: 'read'
  }
];

export const getAll = async () => books;
