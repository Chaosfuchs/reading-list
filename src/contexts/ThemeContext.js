import React, { createContext, useReducer } from 'react';
import { themeReducer } from '../reducers/themeReducer';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const initialState = { darkMode: false };
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
