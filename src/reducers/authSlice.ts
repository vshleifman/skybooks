import { createSlice } from '@reduxjs/toolkit';
import bookerAPI, { setReqToken } from '../api/axiosInst';
import AsyncStorage from '@react-native-community/async-storage';
import { AppThunk } from '../../store';
import { User, UserResponse } from '../types';

interface AuthSliceState {
  token: undefined | string;
  errorMessage: null | string;
  user: null | User;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: undefined,
    errorMessage: null,
    user: null,
  } as AuthSliceState,
  reducers: {
    setUser(state, action) {
      const user: UserResponse = action.payload;
      state.user = user;

      const bookIDsArr = user.books.map(book => book._id);
      state.user!.books = bookIDsArr;
    },
    setToken(state, action) {
      const token = action.payload;
      state.token = token;
      if (token !== null) {
        AsyncStorage.setItem('token', token);
      } else {
        AsyncStorage.removeItem('token');
      }
      setReqToken(token);
    },
    changeError(state, action) {
      const error = action.payload;
      state.errorMessage = error;
    },
  },
});

export const signinThunk = (
  email: string,
  password: string,
): AppThunk => async dispatch => {
  try {
    const { data } = await bookerAPI.post('/signin', { email, password });

    dispatch(setToken(data.token));
    dispatch(setUser(data.updatedUser));
    console.log({ resUser: data.updatedUser });
  } catch (error) {
    dispatch(changeError(error.message));
  }
};

export const signupThunk = (
  email: string,
  password: string,
): AppThunk => async dispatch => {
  try {
    const { data } = await bookerAPI.post('/signup', { email, password });

    dispatch(setToken(data.token));
    dispatch(setUser(data.updatedUser));
  } catch (error) {
    dispatch(changeError(error.message));
  }
};

export const setUserThunk = (): AppThunk => async dispatch => {
  try {
    const response = await bookerAPI.get('/me');
    dispatch(setUser(response.data));
  } catch (error) {
    console.log({ error });
    return error;
  }
};

export const addBookThunk = (id: string): AppThunk => async dispatch => {
  try {
    const response = await bookerAPI.patch('/add-my-book', { id });
    dispatch(setUser(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteBookThunk = (id: string): AppThunk => async dispatch => {
  try {
    const response = await bookerAPI.delete(`/delete-my-book/${id}`);
    dispatch(setUser(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const { setUser, setToken, changeError } = authSlice.actions;

export default authSlice.reducer;
