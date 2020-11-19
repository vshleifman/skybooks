import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import rootReducer, { RootState } from './rootReducer';
import AsyncStorage from '@react-native-community/async-storage';
import { setToken } from './src/reducers/authSlice';

const store = configureStore({
  reducer: rootReducer,
});

AsyncStorage.getItem('token').then(token => store.dispatch(setToken(token)));

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
