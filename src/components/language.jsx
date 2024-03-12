import React, { createContext, useState, useContext } from 'react';

// Create a context
const LanguageContext = createContext();

// Create a provider that holds the state and functions
export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState(0);

  const MudarIdiomaPort = () => setCurrentLanguage(0);
  const MudarIdiomaEng = () => setCurrentLanguage(1);

  return (
    <LanguageContext.Provider value={{ currentLanguage, MudarIdiomaPort, MudarIdiomaEng }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook that components can use to access the language state and updater functions
export function useLanguage() {
  return useContext(LanguageContext);
}