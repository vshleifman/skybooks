import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from '../../store';
import bookerAPI from '../api/axiosInst';
import { Book } from '../types';

interface BookSliceState {
  books: { [id: string]: Book };
}

const bookSlice = createSlice({
  name: 'book',
  initialState: { books: {} } as BookSliceState,
  reducers: {
    setBooks(state, action) {
      const booksArr: Book[] = action.payload;
      booksArr.forEach((book: Book) => {
        state.books[book._id] = book;
      });
    },
  },
});

export const setBooksThunk = (): AppThunk => async dispatch => {
  try {
    const response = await bookerAPI.get('/books');
    dispatch(setBooks(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const { setBooks } = bookSlice.actions;

export default bookSlice.reducer;
