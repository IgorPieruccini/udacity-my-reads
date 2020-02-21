import { getAll } from '../BooksAPI';
import { sortBooksByShelf } from '../utils/utils';

jest.mock('../BooksAPI');

test('getAll - sortedBooksByShelf', async () => {
  const books = await getAll();
  expect(sortBooksByShelf(books).currentlyReading.length).toBe(2);
  expect(sortBooksByShelf(books).wantToRead.length).toBe(1);
  expect(sortBooksByShelf(books).read.length).toBe(1);
});
