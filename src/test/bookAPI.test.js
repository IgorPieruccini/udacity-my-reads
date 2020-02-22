import { getAll, update } from '../BooksAPI';
import { sortBooksByShelf, updateState } from '../utils/utils';

jest.mock('../BooksAPI');

test('getAll - sortedBooksByShelf', async () => {
  const books = await getAll();
  expect(sortBooksByShelf(books).currentlyReading.length).toBe(2);
  expect(sortBooksByShelf(books).wantToRead.length).toBe(2);
  expect(sortBooksByShelf(books).read.length).toBe(2);
});

test('update - updateState', async () => {
  // create the state to test update
  const books = await getAll();
  const state = sortBooksByShelf(books);
  // get update from mock
  const updateData = await update(state.wantToRead[0], 'currentlyReading');
  const newState = updateState(state, updateData);
  expect(newState.currentlyReading.length).toBe(3);
  expect(newState.wantToRead.length).toBe(1);
  expect(newState.read.length).toBe(2);
});
