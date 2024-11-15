import React from 'react';
import { useTranslation } from 'react-i18next';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{t('siteName')}</h3>
            <p>{t('footerDescription')}</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">{t('followUs')}</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100092588513553" className="text-white hover:text-blue-600"><Facebook size={24} /></a>
              <a href="https://www.instagram.com/comunidade_angolana_romenia_/" className="text-white hover:text-pink-600"><Instagram size={24} /></a>
              <a href="https://www.linkedin.com/in/comunidade-angolana-na-rom%C3%A9nia-04506127b/" className="text-white hover:text-blue-500"><Linkedin size={24} /></a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <p>&copy; {new Date().getFullYear()} {t('siteName')}. {t('allRightsReserved')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;