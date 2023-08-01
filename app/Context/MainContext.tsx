"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  darkTheme: true,
  setDarkTheme: () => {},
});

export const GlobalContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <GlobalContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
