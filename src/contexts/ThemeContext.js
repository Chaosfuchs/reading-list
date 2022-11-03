import React, { createContext, useEffect, useReducer } from 'react';
import { themeReducer } from '../reducers/themeReducer';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  // Wenn localStorage nicht benötigt wird, lediglich bei useReducer initialState angeben
  // const initialState = { darkMode: false };
  const [state, dispatch] = useReducer(themeReducer, false, () => {
    const localData = localStorage.getItem('state');
    return localData ? JSON.parse(localData) : false;
  });
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
