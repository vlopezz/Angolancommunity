import React from 'react';
import { useTranslation } from 'react-i18next';

// Force refresh
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage('pt')} className="flex items-center">
        <img src="https://flagcdn.com/w20/pt.png" alt="Portuguese" className="mr-1 w-5 h-3" />
        <span className="sr-only md:not-sr-only">PT</span>
      </button>
      <button onClick={() => changeLanguage('en')} className="flex items-center">
        <img src="https://flagcdn.com/w20/us.png" alt="English" className="mr-1 w-5 h-3" />
        <span className="sr-only md:not-sr-only">EN</span>
      </button>
      <button onClick={() => changeLanguage('ro')} className="flex items-center">
        <img src="https://flagcdn.com/w20/ro.png" alt="Romanian" className="mr-1 w-5 h-3" />
        <span className="sr-only md:not-sr-only">RO</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;