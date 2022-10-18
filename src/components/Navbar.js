import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import ThemeButton from './ThemeButton';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const { books } = useContext(BookContext);
  return (
    <div className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="flexbox">
        <h1>My Reading List</h1>
        <p>Currently you have {books.length} books to get through...</p>
      </div>
      <ThemeButton />
    </div>
  );
};

export default Navbar;
