import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: 'Schatten der Nacht', author: 'Josef Zong', id: 1 },
    { title: 'Tod im Wattenmeer', author: 'Wilhelm Dos', id: 2 },
    { title: 'Die Känguru Chroniken', author: 'Mark Uwe Klink', id: 3 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv1() }]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
