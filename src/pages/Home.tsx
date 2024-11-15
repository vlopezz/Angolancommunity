import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/img/img-community-1.jpg)` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">{t('homeTitle')}</h1>
        <p className="text-2xl mb-8">{t('homeDescription')}</p>
        
      </div>
    </div>
  );
};

export default Home;