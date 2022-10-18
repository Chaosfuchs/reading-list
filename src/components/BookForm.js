import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const NewBookForm = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    console.log(title, author);
    dispatch({
      type: 'ADD_BOOK',
      book: {
        title,
        author,
      },
    });
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={`form ${darkMode ? 'form-dark' : 'form-light'}`}
        required
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <input
        className={`form ${darkMode ? 'form-dark' : 'form-light'}`}
        required
        type="text"
        placeholder="Book Author"
        value={author}
        onChange={event => setAuthor(event.target.value)}
      />
      <button
        className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`}
        type="submit"
      >
        Add Book
      </button>
    </form>
  );
};

export default NewBookForm;
