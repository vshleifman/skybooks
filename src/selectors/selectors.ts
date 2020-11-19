import { RootState } from '../../rootReducer';

export const tokenSelector = (state: RootState) => state.auth.token;
export const userSelector = (state: RootState) => state.auth.user;
export const booksSelector = (state: RootState) => state.book;
