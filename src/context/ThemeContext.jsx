import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState('light');

  const toggleTema = () => {
    setTema((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ tema, toggleTema }}>
      {children}
    </ThemeContext.Provider>
  );
}
