import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
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
        required
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <input
        required
        type="text"
        placeholder="Book Author"
        value={author}
        onChange={event => setAuthor(event.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default NewBookForm;
