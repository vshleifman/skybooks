import AsyncStorage from '@react-native-community/async-storage';

import bookerAPI from '../api/booker';
import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'get_user':
      return { ...state, user: action.payload };
    case 'signout':
      return { ...state, token: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};  

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await bookerAPI.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token })
  } catch (error) {
    dispatch({ type: "add_error", payload: error.message })      
  };
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await bookerAPI.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token })
  } catch (error) {
    dispatch({ type: "add_error", payload: error.message })
  }    
};

const autoSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signup', payload: token })
  }
}

const signout = dispatch => async () => {
  await AsyncStorage.setItem('token', '')
  const token = await AsyncStorage.getItem('token')
  dispatch({ type: 'signout', payload: token })
};

const getUser = dispatch => async () => {
  try {
    const response = await bookerAPI.get('/me');
    dispatch({ type: 'get_user', payload: response.data })
  } catch (error) {
    console.log(error);
  }
};

const addMyBooks = dispatch => async (id) => {
  try {
    const response = await bookerAPI.patch('/add-my-book', { id });
    dispatch({ type: 'get_user', payload: response.data })
  } catch (error) {
    console.log(error);
  }
};

const deleteMyBook = dispatch => async (id) => {
  console.log({id});
  
  try {
    const response = await bookerAPI.delete(`/delete-my-book/${id}`);
    dispatch({ type: 'get_user', payload: response.data })
  } catch (error) {
    console.log(error);
  }
}


const clearErr = dispatch => () => {
  dispatch({ type: "add_error", payload: '' })
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, clearErr, autoSignin, getUser, addMyBooks, deleteMyBook },
  { token: null, errorMessage: '' }
);