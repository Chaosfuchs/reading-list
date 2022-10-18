import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookDetails = ({ book }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const { dispatch } = useContext(BookContext);
  return (
    <li
      className={`book-list ${darkMode ? 'book-list-dark' : 'book-list-light'}`}
      onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}
    >
      <div className="title"> {book.title} </div>
      <div className="author"> {book.author} </div>
    </li>
  );
};

export default BookDetails;
