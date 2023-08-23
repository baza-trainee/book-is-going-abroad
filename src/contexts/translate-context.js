import { createContext, useState } from 'react';
import locales from '../locales/locales.json';

export const TranslateContext = createContext();

// eslint-disable-next-line react/prop-types
const Translate = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState('ua');

  const handleLanguageChange = (newValue) => {
    setCurrentLocale(newValue.value);
  };

  const translate = (key) => {
    if (locales[currentLocale] && locales[currentLocale][key]) {
      return locales[currentLocale][key];
    }
    return key;
  };

  return (
    <TranslateContext.Provider
      value={{
        translate,
        currentLocale,
        // eslint-disable-next-line comma-dangle
        handleLanguageChange,
      }}>
      {children}
    </TranslateContext.Provider>
  );
};

export default Translate;
