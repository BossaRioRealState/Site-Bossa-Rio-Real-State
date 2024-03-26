import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context
const LanguageContext = createContext();

// Create a provider that holds the state and functions
export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('currentLanguage') || 0 : 0
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('currentLanguage', currentLanguage);
    }
  }, [currentLanguage]);

  const MudarIdiomaPort = () => setCurrentLanguage(0);
  const MudarIdiomaEng = () => setCurrentLanguage(1);

  return (
    isClient && (
      <LanguageContext.Provider value={{ currentLanguage, MudarIdiomaPort, MudarIdiomaEng }}>
        {children}
      </LanguageContext.Provider>
    )
  );
}

// Custom hook that components can use to access the language state and updater functions
export function UseLanguage() {
  return useContext(LanguageContext);
}
