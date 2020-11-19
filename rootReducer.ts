import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './src/reducers/authSlice';
import bookReducer from './src/reducers/bookSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  book: bookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
