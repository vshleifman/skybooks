import React, { useState, Children } from 'react';

const books = require('../book.json')
const BookContext = React.createContext();

export const BookProvider = ({ children }) => {
  const [myBooks, setMyBooks] = useState([]);
  const addMyBooks = (book) => {
    setMyBooks([...myBooks, book]);
  };
  return (
    <BookContext.Provider value={{ myBooks, addMyBooks, books }}>
      {children}
    </BookContext.Provider>
  )
};

export default BookContext;