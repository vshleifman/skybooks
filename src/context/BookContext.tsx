import bookerAPI from '../api/booker';
import createDataContext from './createDataContext';

// const books = require('../book.json')
const books = [];
const myBooks = [];

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'get_books':
      return { ...state, books: action.payload }
    case 'add_book':
      return { ...state, myBooks: [...state.myBooks, action.payload] }
    default:
      return state
  }
};

const getBooks = dispatch => async () => {
  try {
    const response = await bookerAPI.get('/books');
    
    dispatch({ type: 'get_books', payload: response.data })
  } catch (error) {
    console.log(error);
  }
};

const addMyBooks = dispatch => async (id) => {
  try {
    await bookerAPI.patch('/add-my-book', { id });
    dispatch({ type: 'add_book', payload: id })
  } catch (error) {
    console.log(error);
  }
};

const deleteMyBook = dispatch => async (id) => {
  try {
    await bookerAPI.delete(`/delete-my-book/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export const { Provider, Context } = createDataContext(
  bookReducer,
  { addMyBooks, getBooks, deleteMyBook },
  { books, myBooks }
);

// export const BookProvider = ({ children }) => {
//   const [myBooks, setMyBooks] = useState([]);
//   const addMyBooks = (book) => {
//     setMyBooks([...myBooks, book]);
//   };
//   return (
//     <BookContext.Provider value={{ myBooks, addMyBooks, books }}>
//       {children}
//     </BookContext.Provider>
//   )
// };

// export default BookContext;