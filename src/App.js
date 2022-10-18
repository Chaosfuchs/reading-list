import React, { useContext } from 'react';
import NewBookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`App ${darkMode ? 'app-dark' : 'app-light'}`}>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
